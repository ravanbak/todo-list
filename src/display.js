import * as pubSub from './pubsub';
import { createElement, deleteAllChildren } from './dom-util';
import { Priority } from './todo-item';
import { compareAsc, format } from 'date-fns';
// import { todoList } from './todo-list';

const header = (function() {
    function generateHeader() {
        const header = createElement({ tag: 'div' });
        header.classList.add('site__header');

        const divTitle = createElement({ 
            tag: 'div', 
            parent: header, 
            classList: [ 'hero-text' ],
        });

        createElement({
            tag: 'h1',
            parent: divTitle,
            textContent:  'Todoodli',
        });
    
        return header;
    }

    return {
        generateHeader,
    };
})();

const sidebar = (function() {
    function generateSidebar(projects, activeProject) {
        const sidebarContainer = createElement({
            tag: 'div', 
            classList: ['site__sidebar'],
        });

        const sidebar = createElement({
            tag: 'div',
            parent: sidebarContainer,
            classList: ['container'],
            textContent: 'Projects',
        });

        const list = createElement({
            tag: 'ul',
            parent: sidebar,
        });

        for (let i = 0; i < projects.length; i++) {
            let li = createElement({
                tag: 'li',
                parent: list,
                textContent: projects[i].name,
            });

            // hilight the active project
            if (projects[i].name == activeProject.name) {
                li.classList.add('active')
            }

            li.addEventListener('click', () => pubSub.publish('selectProject', { name: projects[i].name }));
        }

        return sidebarContainer;
    }

    return {
        generateSidebar,
    };
})();

const content = (function() {
    let _activeProject;
    let _newTodoItem;

    const SortOrder = Object.freeze({
        Title: 0,
        Priority: 1,
        Date: 2,
        Custom: 3
    });
    let primarySortField = SortOrder.Priority;
    
    const SortDirection = Object.freeze({
        Ascending: 1,
        Descending: -1,
    });
    let sortDirection = SortDirection.Descending;

    function generateContent(projects, activeProject) {
        
        // Generate the  sidebar and active todo list content and return
        // a div containing both.

        _activeProject = activeProject;

        const pageContent = createElement({
            tag: 'div', 
            classList: ['container', 'site__content'],
        });

        pageContent.appendChild(sidebar.generateSidebar(projects, _activeProject));

        const pageContainer = createElement({
            tag: 'div', 
            parent: pageContent, 
            classList: [ 'site__page' ],
        });

        pageContainer.appendChild(_generatePage(_activeProject));

        return pageContent;
    }

    function _getSortedTodoItems(project) {
        let items = project.getTodoItems();

        switch (primarySortField) {
            case SortOrder.Title:
                if (sortDirection === SortDirection.Ascending) {
                    items.sort((a, b) => a.title > b.title ? 1 : -1);
                } 
                else {
                    items.sort((a, b) => a.title > b.title ? -1 : 1);
                }
                break;

            case SortOrder.Priority:
                if (sortDirection === SortDirection.Ascending) {
                    items.sort((a, b) => a.priority - b.priority);
                } 
                else {
                    items.sort((a, b) => b.priority - a.priority);
                }
                break;

            case SortOrder.Date:
                if (sortDirection === SortDirection.Ascending) {
                    items.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
                } 
                else {
                    items.sort((a, b) => compareAsc(b.dueDate, a.dueDate));
                }
                break;
        }

        return items;
    }

    function _updatePage() {
        const page = document.querySelector('.todo-list');
        page?.replaceWith(_generatePage(_activeProject));
    }

    function _setAllItemsExpandedState(todoItems, expanded) {
        todoItems.forEach(el => el.expanded = expanded); 
        
        _updatePage();
    }

    function _generatePage(project) {

        // Return a div containing the active project's todo list.

        const page = document.createElement('div');
        page.classList.add('container', 'todo-list');
        
        const todoItems = _getSortedTodoItems(project);
        const pendingTodoItem = project.getPendingTodoItem();

        // Container for page controls
        const controlsContainer = createElement({
            tag: 'div',
            parent: page,
            classList: ['controls']
        });

        // 'Add new todo item' button
        const addItemButton = createElement({
            tag: 'div',
            parent: controlsContainer,
            classList: ['add-item', 'fa-solid', 'fa-xl', 'fa-plus-circle'],
        });
        addItemButton.addEventListener('click', () => pubSub.publish('addItem', { isPending: true }));
        
        // 'Expand all' button:
        const expandAllButton = createElement({
            tag: 'div',
            parent: controlsContainer,
            classList: ['expand-all', 'fa-solid', 'fa-xl', 'fa-angle-double-down'],
        });
        expandAllButton.addEventListener('click', () => _setAllItemsExpandedState(todoItems, true));

        // 'Collapse all' button:
        const collapseAllButton = createElement({
            tag: 'div',
            parent: controlsContainer,
            classList: ['collapse-all', 'fa-solid', 'fa-xl', 'fa-angle-double-up'],
        });
        collapseAllButton.addEventListener('click', () => _setAllItemsExpandedState(todoItems, false));

        // If there is a pending todo item (item added through UI but not 
        // yet accepted by the user), display it at the top of the page.
        if (pendingTodoItem) {
            page.appendChild(todoCardModule.generateTodoCard(pendingTodoItem));
        }

        // Display all todo items in the project.
        for (let i = 0; i < todoItems.length; i++) {
            page.appendChild(todoCardModule.generateTodoCard(todoItems[i]));
        }
        
        return page;
    }

    const todoCardModule = (function() {
        const _getPriorityClass = (p) => {
            switch (p) {
                case Priority.High:
                    return 'priority-high';
                case Priority.Low:
                    return 'priority-low';
                default:
                    return 'priority-normal';
            }
        }

        function generateTodoCard(todoItem) {

            // Return a div containing a single todo item
            // showing the item's basic info. If the item has been 
            // expanded, extended info will also be displayed.

            const divTodoCard = createElement({
                tag: 'div',
                classList: ['todo-card'],
                id: todoItem.id,
            });
            if (todoItem.isDone()) {
                divTodoCard.classList.add('todo-done');
            }

            // Container for basic todo item elements
            const divTodoBasic = createElement({
                tag: 'div',
                parent: divTodoCard,
                classList: ['todo-card__basic'],
            });

            divTodoBasic.appendChild(_createCheckboxInput(todoItem));
            divTodoBasic.appendChild(_createTextboxInput(todoItem, {field:'title'}));
            divTodoBasic.appendChild(_createMenuButton(todoItem));
            divTodoBasic.appendChild(_createDeleteButton(todoItem));

            if (todoItem.hasDetails()) {
                const arrow = createElement({
                    tag: 'div',
                    parent: divTodoBasic,
                    classList: ['expander', 'fa-solid'],
                });
                arrow.addEventListener('click', () => _expandCollapseTodoItem(todoItem));

                arrow.classList.add((todoItem?.expanded) ? 'fa-angle-up' : 'fa-angle-down');

                if (todoItem?.expanded) {
                    // Expanded details container
                    const divTodoDetails = createElement({
                        tag: 'div',
                        parent: divTodoCard,
                        classList: ['todo-card__expanded'],
                    });

                    divTodoDetails.appendChild(_generateExpandedTodoItemContent(todoItem));

                    if (todoItem.isDone()) {
                        divTodoDetails.classList.add('todo-done');
                    }
                } 
            }          

            return divTodoCard;
        }
    
        function _createCheckboxInput(todoItem) {
            // Add checkbox container
            const checkboxContainer = createElement({
                tag: 'div',
                classList: ['checkbox'],
            });
            checkboxContainer.classList.add(_getPriorityClass(todoItem.priority));

            // Add checkbox input element
            const checkboxInput = createElement({
                tag: 'input',
                type: 'checkbox',
                parent: checkboxContainer,
                name: todoItem.title,
            });

            checkboxInput.checked = todoItem.isDone();
            checkboxInput.addEventListener('change', () => pubSub.publish('toggleItemDone', {id: todoItem.id}));

            return checkboxContainer;
        }

        function _createTextboxInput(todoItem, args) {
            const textInput = createElement({
                tag: 'input',
                type: 'text',
                placeholder: args.field,
            });
            
            if (!_activeProject?.isPendingTodoItem(todoItem) || todoItem[args.field]) {
                textInput.value = todoItem[args.field];
            }

            textInput.addEventListener('change', (e) => pubSub.publish('changeItem', 
                                                                       {id: todoItem.id, 
                                                                        [args.field]: e.target.value}));

            return textInput;
        }

        function _createMenuButton(todoItem) {
            const button = createElement({
                tag: 'div',
                classList: ['item-menu', 'fa-solid', 'fa-ellipsis-vertical', 'hide'],
            });

            button.addEventListener('click', () => _showItemMenu(todoItem)); 

            return button;
        }

        function _showItemMenu(todoItem) {

        }

        function _createDeleteButton(todoItem) {
            const button = createElement({
                tag: 'div',
                classList: ['delete-item', 'fa-solid', 'fa-trash-can', 'hide'],
            });

            button.addEventListener('click', () => pubSub.publish('deleteItem', {id: todoItem.id})); 

            return button;
        }

        function _generateExpandedTodoItemContent(todoItem) {
            const divExpanded = createElement({tag: 'div'});

            if (todoItem.dueDate) {
                const container = createElement({tag: 'div', parent: divExpanded, classList:['detail-container']});
                createElement({
                    tag: 'div',
                    parent: container,
                    classList: ['fa-solid', 'fa-calendar-alt']
                });

                createElement({
                    tag: 'div',
                    parent: container,
                    textContent: format(todoItem.dueDate, 'MMM-dd-yy, hh:mmaaa'),
                });
            }

            if (todoItem.desc) {
                const container = createElement({tag: 'div', parent: divExpanded, classList:['detail-container']});
                createElement({
                    tag: 'div',
                    parent: container,
                    classList: ['fa-solid', 'fa-info-circle']
                });

                container.appendChild(_createTextboxInput(todoItem, {field:'desc'}));
            }

            if (todoItem.notes) {
                const container = createElement({tag: 'div', parent: divExpanded, classList:['detail-container']});
                createElement({
                    tag: 'div',
                    parent: container,
                    classList: ['fa-solid', 'fa-clipboard']
                });

                container.appendChild(_createTextboxInput(todoItem, {field:'notes'}));
            }

            return divExpanded;
        }

        return {
            generateTodoCard
        };
    })();

    function updateTodoItem(todoItem) {
        const newTodoCard = todoCardModule.generateTodoCard(todoItem);
        document.querySelector('#' + todoItem.id)?.replaceWith(newTodoCard);
    }

    function _expandCollapseTodoItem(todoItem) {
        todoItem.expanded = !todoItem.expanded;

        updateTodoItem(todoItem);
    }

    return {
        generateContent,
        updateTodoItem,
    };
})();

const footer = (function() {
    function generateFooter() {
        const footer = createElement({
            tag: 'div', 
            classList: ['site__footer'],
        });    
        const footerContent = createElement({
            tag: 'div',
            parent: footer, 
            classList: ['footer__inner'],
        });
    
        createElement({
            tag: 'span',
            parent: footerContent,
            textContent: 'Copyright © 2022 David Ravanbakhsh',
        });
    
        const a = createElement({
            tag: 'a',
            parent: footerContent,
        });
        a.href = 'https://github.com/ravanbak';
        a.target = '_blank';
    
        createElement({
            tag: 'i',
            parent: a,
            classList: ['fa-brands', 'fa-github-square', 'fa-2x'],
        });
    
        return footer;
    }

    return {
        generateFooter,
    }
})();

const display = (function() {
    function renderSite(projects, activeProject) {
        // Render entire site (including header and footer).

        deleteAllChildren('div#site');

        const site = document.querySelector('div#site');
        site?.appendChild(header.generateHeader());
        site?.appendChild(content.generateContent(projects, activeProject));
        site?.appendChild(footer.generateFooter());
    }

    function showMessage(message) {
        console.log(`MESSAGE: ${message}`);
    }

    function updateContent(projects, activeProject) {
        // Render site content (sidebar and todo list items).
        
        const page = document.querySelector('.site__content');
        const updatedPage = content.generateContent(projects, activeProject);
        page?.replaceWith(updatedPage);
    }

    return {
        renderSite,
        updateContent,
        showMessage,
        updateTodoItem: content.updateTodoItem,
    };
})();

export { display };