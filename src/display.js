import * as pubSub from './pubsub';
import { createElement, deleteAllChildren } from './dom-util';
import { Priority } from './todo-item';
import { compareAsc, format } from 'date-fns';

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

const content = (function() {
    let _activeProject;

    const sidebar = (function() {
        function generateSidebar(projects) {
            const sidebarContainer = createElement({tag: 'div', classList: ['site__sidebar']});
    
            const sidebar = _addSidebarElement();   
            sidebar.appendChild(_addProjectList());
            sidebar.appendChild(_addAddProjectButton());
            
            return sidebarContainer;
            
            function _addProjectList() {
                const list = createElement({tag: 'ul'});
                
                for (let i = 0; i < projects.length; i++) {
                    let li = createElement({
                        tag: 'li',
                        parent: list,
                        textContent: projects[i].name,
                    });
        
                    // hilight the active project
                    if (projects[i].name === _activeProject.name) {
                        li.classList.add('active')
                    }
                    
                    li.addEventListener('click', () => pubSub.publish('selectProject', { name: projects[i].name }));
                }

                return list;
            }
            
            function _addAddProjectButton() {
                const addProjectButton = createElement({tag: 'div', classList: ['add-project']});
                addProjectButton.appendChild(createElement({tag: 'div', classList: ['fa-solid', 'fa-xl', 'fa-plus-circle']}));
                addProjectButton.addEventListener('click', () => pubSub.publish('addProject', {name: 'New Project'}));
                
                return addProjectButton;
            }

            function _addSidebarElement() {
                return createElement({
                    tag: 'div',
                    parent: sidebarContainer,
                    classList: ['container'],
                    textContent: 'Projects',
                });
            }
        }
    
        return {
            generateSidebar,
        };
    })();
    
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

        const pageContent = createElement({tag: 'div', classList: ['container', 'site__content']});
        pageContent.appendChild(sidebar.generateSidebar(projects, _activeProject));

        const pageContainer = pageContent.appendChild(createElement({tag: 'div', classList: [ 'site__page' ]}));
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

    function _generatePage(project) {
        // Return a div containing the active project's todo list.

        const page = createElement({tag:'div', classList:['container', 'todo-list']});
                
        const todoItems = _getSortedTodoItems(project);
        const pendingTodoItem = project.getPendingTodoItem();

        // Container for page controls
        const controlsContainer = createElement({
            tag: 'div',
            parent: page,
            classList: ['controls']
        });

        // Create main control buttons for todo list
        controlsContainer.appendChild(_createAddItemButton());
        controlsContainer.appendChild(_createExpandAllButton());
        controlsContainer.appendChild(_createCollapseAllButton());

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

        function _setAllItemsExpandedState(todoItems, expanded) {
            todoItems.forEach(el => el.expanded = expanded); 
            
            _updatePage();
        }

        function _createExpandAllButton() {
            const button = createElement({
                tag: 'div',
                classList: ['expand-all', 'fa-solid', 'fa-xl', 'fa-angle-double-down'],
            });
            button.addEventListener('click', () => _setAllItemsExpandedState(todoItems, true));

            return button;
        }
        
        function _createCollapseAllButton() {
            const button = createElement({
                tag: 'div',
                classList: ['collapse-all', 'fa-solid', 'fa-xl', 'fa-angle-double-up'],
            });
            button.addEventListener('click', () => _setAllItemsExpandedState(todoItems, false));

            return button;
        }
        
        function _createAddItemButton() {
            // 'Add new todo item' button
            const addItemButton = createElement({
                tag: 'div',
                classList: ['add-item', 'fa-solid', 'fa-xl', 'fa-plus-circle'],
            });
            addItemButton.addEventListener('click', () => pubSub.publish('addItem', { isPending: true }));
    
            return addItemButton;
        }        
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
            // expanded, display details.

            const divTodoCard = createElement({tag: 'div',
                                               classList: ['todo-card'],
                                               id: todoItem.id});
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
            divTodoBasic.appendChild(_createExpanderButton(todoItem));
            
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

            return divTodoCard;

            function _createExpanderButton() {
                const arrow = createElement({
                    tag: 'div',
                    classList: ['expander', 'fa-solid'],
                });
                arrow.classList.add((todoItem?.expanded) ? 'fa-angle-up' : 'fa-angle-down');
                
                arrow.addEventListener('click', () => _expandCollapseTodoItem(todoItem));

                return arrow;
            }

            function _createCheckboxInput(todoItem) {
                // Create checkbox container
                const checkboxContainer = createElement({
                    tag: 'div',
                    classList: ['checkbox', _getPriorityClass(todoItem.priority)],
                });
    
                // Create checkbox input element
                const checkboxInput = createElement({
                    tag: 'input',
                    type: 'checkbox',
                    parent: checkboxContainer,
                    name: todoItem.title,
                    checked: todoItem.isDone()
                });
    
                // checkboxInput.checked = todoItem.isDone();
                checkboxInput.addEventListener('change', () => pubSub.publish('toggleItemDone', {id: todoItem.id}));
    
                return checkboxContainer;
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
        }

        function _generateExpandedTodoItemContent(todoItem) {
            const divExpanded = createElement({tag: 'div'});

            // Due date
            const dueDateContainer = divExpanded.appendChild(_createContainerWithIcon('calendar-alt'));
            dueDateContainer.appendChild(_createDateInput(todoItem, {field:'dueDate'}));

            // Description
            const infoContainer = divExpanded.appendChild(_createContainerWithIcon('info-circle'));
            infoContainer.appendChild(_createTextboxInput(todoItem, {field:'description'}));

            // Notes
            const notesContainer = divExpanded.appendChild(_createContainerWithIcon('clipboard'));
            notesContainer.appendChild(_createTextboxInput(todoItem, {field:'notes'}));

            return divExpanded;

            function _createDateInput(todoItem, args) {
                const dateInput = createElement({
                    tag: 'input',
                    type: 'date',
                    value: todoItem.dueDate
                });
                
                if (!_activeProject?.isPendingTodoItem(todoItem) && todoItem[args.field]) {
                    dateInput.value = todoItem[args.field];
                }
    
                dateInput.addEventListener('change', (e) => pubSub.publish('changeItem', 
                                                                           {id: todoItem.id, 
                                                                            [args.field]: e.target.value}));
    
                return dateInput;
            }            
        }

        function _createContainerWithIcon(faIconName) {
            // Create a div with the specified FA character icon as its child element.

            const container = createElement({tag: 'div', classList:['detail-container']});
            container.appendChild(createElement({tag: 'div', 
                                                 classList: ['fa-solid', 
                                                             `fa-${faIconName}`]}));

            return container;
        }

        function _createTextboxInput(todoItem, args) {
            const input = createElement({
                tag: 'input',
                type: 'text',
                placeholder: args.field,
            });
            
            if (!_activeProject?.isPendingTodoItem(todoItem) && todoItem[args.field]) {
                input.value = todoItem[args.field];
            }

            input.addEventListener('change', (e) => pubSub.publish('changeItem', 
                                                                   {id: todoItem.id, 
                                                                    [args.field]: e.target.value}));

            return input;
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
        // Render site (including header and footer).

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