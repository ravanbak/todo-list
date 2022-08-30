import * as pubSub from './pubsub';
import { addElement, deleteAllChildren } from './dom-util';
import { Priority } from './todo-item';
import { compareAsc, format } from 'date-fns';

const header = (function() {
    function generateHeader() {
        const header = addElement({ tag: 'div' });
        header.classList.add('site__header');

        const divTitle = addElement({ 
            tag: 'div', 
            parent: header, 
            classList: [ 'hero-text' ],
        });

        addElement({
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
        const sidebarContainer = addElement({
            tag: 'div', 
            classList: [ 'site__sidebar' ],
        });

        const sidebar = addElement({
            tag: 'div',
            parent: sidebarContainer,
            classList: ['container'],
            textContent: 'PROJECTS',
        });

        const list = addElement({
            tag: 'ul',
            parent: sidebar,
        });

        for (let i = 0; i < projects.length; i++) {
            let li = addElement({
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

    const SortOrder = Object.freeze({
        Title: 0,
        Priority: 1,
        Date: 2,
        Custom: 3
    });
    let primarySortField = SortOrder.Date;
    
    const SortDirection = Object.freeze({
        Ascending: 1,
        Descending: -1,
    });
    let sortDirection = SortDirection.Ascending;

    function generateContent(projects, activeProject) {
        
        // Generate the  sidebar and active todo list content and return
        // a div containing both.

        _activeProject = activeProject;

        const pageContent = addElement({
            tag: 'div', 
            classList: ['container', 'site__content'],
        });

        pageContent.appendChild(sidebar.generateSidebar(projects, _activeProject));

        const pageContainer = addElement({
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
                    return items.sort((a, b) => a.title > b.title ? 1 : -1);
                } 
                else {
                    return items.sort((a, b) => a.title > b.title ? -1 : 1);
                }

            case SortOrder.Priority:
                if (sortDirection === SortDirection.Ascending) {
                    return items.sort((a, b) => a.priority - b.priority);
                } 
                else {
                    return items.sort((a, b) => b.priority - a.priority);
                }

            case SortOrder.Date:
                if (sortDirection === SortDirection.Ascending) {
                    return items.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
                } 
                else {
                    return items.sort((a, b) => compareAsc(b.dueDate, a.dueDate));
                }                
        }
    }

    function _updatePage() {
        const page = document.querySelector('.todo-list');
        page.replaceWith(_generatePage(_activeProject));
    }

    function _generatePage(project) {

        // Return a div containing the active project's todo list.

        const page = document.createElement('div');
        page.classList.add('container', 'todo-list');
        
        const todoList = _getSortedTodoItems(project);

        const controls = addElement({
            tag: 'div',
            parent: page,
            classList: ['controls']
        });

        // Add new item button
        const addItem = addElement({
            tag: 'div',
            parent: controls,
            classList: ['add-item', 'fas', 'fa-2xl', 'fa-plus'],
            //textContent:  '\uf067'
        });
        
        // Expand all button:
        const expandAll = addElement({
            tag: 'div',
            parent: controls,
            classList: ['expand-all', 'fas', 'fa-2xl', 'fa-angle-double-down'],
        });
        expandAll.addEventListener('click', () => { todoList.forEach(el => el.expanded = true); _updatePage(); });

        // Collapse all button:
        const collapseAll = addElement({
            tag: 'div',
            parent: controls,
            classList: ['collapse-all', 'fas', 'fa-2xl', 'fa-angle-double-up'],
        });
        collapseAll.addEventListener('click', () => { todoList.forEach(el => el.expanded = false); _updatePage(); });

        for (let i = 0; i < todoList.length; i++) {
            page.appendChild(todoCard.generateTodoCard(todoList[i]));
        }

        return page;
    }

    const todoCard = (function(todoItem) {
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

            const divTodoCard = addElement({
                tag: 'div',
                classList: ['todo-card'],
                id: todoItem.id,
            });
            if (todoItem.done) {
                divTodoCard.classList.add('todo-done');
            }

            const divTodoBasic = addElement({
                tag: 'div',
                parent: divTodoCard,
                classList: ['todo-card__basic'],
            });

            const checkboxContainer = addElement({
                tag: 'div',
                parent: divTodoBasic,
                classList: ['checkbox'],
            });
            checkboxContainer.classList.add(_getPriorityClass(todoItem.priority));

            const checkboxInput = addElement({
                tag: 'input',
                parent: checkboxContainer,
                type: 'checkbox',
                name: todoItem.title,
            });
            checkboxInput.checked = todoItem.done;
            checkboxInput.addEventListener('change', (e) => _toggleDone(e, todoItem));

            const label = addElement({
                tag: 'label',
                parent: divTodoBasic,
                textContent: todoItem.title,
            });
            label.style.for = todoItem.title;
            label.addEventListener('click', () => _expandCollapseTodoItem(todoItem), {capture: false});

            if (todoItem.hasDetails()) {
                const arrow = addElement({
                    tag: 'span',
                    parent: divTodoBasic,
                    classList: ['expander', 'fas'],
                });
                arrow.addEventListener('click', () => _expandCollapseTodoItem(todoItem));

                if (todoItem?.expanded) {
                    arrow.classList.add('fa-angle-up');
                    
                    const divTodoDetails = addElement({
                        tag: 'div',
                        parent: divTodoCard,
                        classList: ['todo-card__expanded'],
                    });

                    divTodoDetails.appendChild(_generateExpandedTodoItemContent(todoItem));

                    if (todoItem.done) {
                        divTodoDetails.classList.add('todo-done');
                    }
                } 
                else {
                    arrow.classList.add('fa-angle-down');
                }
            }

            return divTodoCard;
        }
    
        function _generateExpandedTodoItemContent(todoItem) {
            const divExpanded = addElement({tag: 'div'});

            if (todoItem.dueDate) {
                addElement({
                    tag: 'div',
                    parent: divExpanded,
                    textContent: 'Due: ' + format(todoItem.dueDate, 'yyyy-MM-dd, hh:mm'),
                });
            }

            addElement({
                tag: 'div',
                parent: divExpanded,
                textContent: 'Description: ' + todoItem.desc,
            });

            addElement({
                tag: 'div',
                parent: divExpanded,
                textContent: 'Notes: ' + todoItem.notes,
            });

            return divExpanded;
        }

        function _toggleDone(e, todoItem) {
            todoItem.done = e.target.checked;
            
            _updateTodoItem(todoItem);
        }

        return {
            generateTodoCard
        };
    })();

    function _updateTodoItem(todoItem) {
        const newTodoCard = todoCard.generateTodoCard(todoItem);
        document.querySelector('#' + todoItem.id)?.replaceWith(newTodoCard);
    }

    function _expandCollapseTodoItem(todoItem) {
        todoItem.expanded = (!todoItem.expanded);

        _updateTodoItem(todoItem);
    }

    return {
        generateContent,
    };
})();

const footer = (function() {
    function generateFooter() {
        const footer = addElement({
            tag: 'div', 
            classList: ['site__footer'],
        });    
        const footerContent = addElement({
            tag: 'div',
            parent: footer, 
            classList: ['footer__inner'],
        });
    
        addElement({
            tag: 'span',
            parent: footerContent,
            textContent: 'Copyright © 2022 David Ravanbakhsh',
        });
    
        const a = addElement({
            tag: 'a',
            parent: footerContent,
        });
        a.href = 'https://github.com/ravanbak';
        a.target = '_blank';
    
        addElement({
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
    };
})();

export { display };