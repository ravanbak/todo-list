import * as pubSub from './pubsub';
import { createElement, deleteAllChildren } from './dom-util';
import { Priority } from './todo-item';
import { compareAsc, format } from 'date-fns';
import { todoList } from './todo-list';

/*
Site layout:
 Header
 ===========
 Content (Projects, Items)
 ===========
 Footer
*/

const headerDisplayModule = (function() {
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

const contentDisplayModule = (function() {
    let _activeProject;

    function generateContent(projects, activeProject) {
        // Generate the sidebar and the active project's todo list content 
        // and return a div containing both.

        if (projects.length === 0) {
            _activeProject = null;
        }
        else {
            _activeProject = activeProject ? activeProject : projects[0];
        }

        const siteContent = createElement({tag: 'div', classList: ['container', 'site__content']});
        
        // Add projects
        siteContent.appendChild(projectsDisplayModule.generateContent(projects, _activeProject));

        // Add items
        siteContent.appendChild(itemsDisplayModule.generateContent(_activeProject));

        return siteContent;
    }

    const projectsDisplayModule = (function() {
        function generateContent(projects) {
            const sidebarContainer = createElement({ tag: 'div', classList: ['site__sidebar'] });
    
            const sidebar = _addSidebarElement();
            sidebar.appendChild(_addProjectList());
            sidebar.appendChild(_addAddProjectButton());
            
            sidebarContainer.appendChild(sidebar);

            return sidebarContainer;

            function _addSidebarElement() {
                return createElement({
                    tag: 'div',
                    classList: ['container'],
                    textContent: 'Projects',
                });
            }

            function _addProjectList() {
                const projectsContainer = createElement({tag: 'div', classList: ['projects-container']});
                
                for (let i = 0; i < projects.length; i++) {
                    projectsContainer.appendChild(generateProjectItem(projects[i]));
                }

                return projectsContainer;
            }

            function _addAddProjectButton() {
                const addProjectButton = createElement({tag: 'div', classList: ['add-project']});
                addProjectButton.appendChild(createElement({tag: 'div', classList: ['fa-solid', 'fa-plus-circle']}));
                addProjectButton.addEventListener('click', () => pubSub.publish('addProject', {projectName: 'New Project'}));
                
                return addProjectButton;
            }            
        }
            
        function generateProjectItem(project) {
            // Create an element displaying the project name and 
            // buttons for manipulating the project.

            const projectContainer = createElement({
                tag: 'div', 
                classList: ['project-container'],
                id: project.id,
            });

            projectContainer.appendChild(_createDeleteButton());
            projectContainer.appendChild(_createEditButton());

            const { divProjName, inputProjName } = _createProjectNameElements();
            
            // hilight the active project
            if (project.id === _activeProject?.id) {
                projectContainer.classList.add('active')
            }
            
            projectContainer.addEventListener('click', () => pubSub.publish('selectProject', { id: project.id }));

            return projectContainer;

            function _createProjectNameElements() {
                // Create two elements for project name, a div element to display 
                // the name, and a text input element to edit the project name.
                // Only one of these elements will be active at any given time.
                
                const divProjName = createElement({
                    tag: 'div',
                    parent: projectContainer,
                    textContent: project.projectName,
                    classList: ['project-name'],
                });

                const inputProjName = createElement({
                    tag: 'input',
                    type: 'text',
                    placeholder: '<project name>',
                    value: project.projectName,
                    classList: ['project-name'],
                });

                // Handle input events:
                inputProjName.addEventListener('change', e => _acceptProjectName(e));
                inputProjName.addEventListener('focusout', e => _finishEditProjectName(e));
                inputProjName.addEventListener('keydown', e => _handleInputKeyPress(e));
                
                return { divProjName, inputProjName };

                function _handleInputKeyPress(e) {
                    if (e.key === 'Escape') {
                        inputProjName.value = project.projectName;
    
                        document.activeElement?.blur();
                        window.focus();
                    }
                }
            }

            function _editProjectName(e) {
                divProjName.replaceWith(inputProjName);
                inputProjName.focus(); 
                inputProjName.select(); 
            }

            function _finishEditProjectName(e) {
                inputProjName.replaceWith(divProjName);                
            }
    
            function _acceptProjectName(e) {
                if (!e.target.value) {
                    console.log('Invalid project name!');
                    return;
                }

                pubSub.publish('changeProject', { id: project.id, projectName: e.target.value })
            }

            function _createDeleteButton() {
                const deleteButton = createElement({
                    tag: 'div',
                    classList: ['delete-project', 'fa-solid', 'fa-trash-can', 'hide', 'show-on-hover'],
                });

                deleteButton.addEventListener('click', e => pubSub.publish('deleteProject', { id: project.id }));

                return deleteButton;
            }

            function _createEditButton() {
                const editButton = createElement({
                    tag: 'div',
                    classList: ['edit-project', 'fa-solid', 'fa-pen', 'hide', 'show-on-hover'],
                });

                editButton.addEventListener('click', e => _editProjectName(e));

                return editButton;                    
            }
        }
    
        return {
            generateContent,
            generateProjectItem,
        };
    })();
    
    const itemsDisplayModule = (function() {
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

        function _getSortedTodoItems(project) {
            if (!project) {
                return;
            }
            
            let items = project.todoItems;

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

        function generateContent(project) {
            // Return a div containing the active project's todo list.

            const content = createElement({tag: 'div', classList: [ 'site__page' ]});
            const todoItemsContainer = createElement({tag:'div', parent:content, classList:['container', 'todo-list']});

            // Container for page controls
            const controlsContainer = createElement({
                tag: 'div',
                parent: todoItemsContainer,
                classList: ['controls']
            });

            if (project) {
                // Add main control buttons for todo list
                controlsContainer.appendChild(_createAddItemButton());
                controlsContainer.appendChild(_createExpandAllButton());
                controlsContainer.appendChild(_createCollapseAllButton());
                
                // If there is a pending todo item (item added through UI but not 
                // yet accepted by the user), display it at the top of the page.
                const pendingTodoItem = project.getPendingTodoItem();
                if (pendingTodoItem) {
                    todoItemsContainer.appendChild(todoCardModule.generateTodoCard(pendingTodoItem));
                }
                
                // Display all todo items in the project.
                const todoItems = _getSortedTodoItems(project);
                for (let i = 0; i < todoItems.length; i++) {
                    todoItemsContainer.appendChild(todoCardModule.generateTodoCard(todoItems[i]));
                }
            }

            return content;

            function _setAllItemsExpandedState(todoItems, expanded) {
                todoItems.forEach(el => el.expanded = expanded); 
                
                updateContent();
            }

            function _createExpandAllButton() {
                const button = createElement({
                    tag: 'div',
                    classList: ['expand-all', 'fa-solid', 'fa-xl', 'fa-angle-double-down'],
                });
                button.addEventListener('click', () => _setAllItemsExpandedState(project.todoItems, true));

                return button;
            }
            
            function _createCollapseAllButton() {
                const button = createElement({
                    tag: 'div',
                    classList: ['collapse-all', 'fa-solid', 'fa-xl', 'fa-angle-double-up'],
                });
                button.addEventListener('click', () => _setAllItemsExpandedState(project.todoItems, false));

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

        function updateContent() {
            const content = document.querySelector('.site__page');
            content?.replaceWith(generateContent(_activeProject));
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
                if (todoItem.done) {
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

                    if (todoItem.done) {
                        divTodoDetails.classList.add('todo-done');
                    }
                } 

                return divTodoCard;

                function _createExpanderButton() {
                    const arrow = createElement({
                        tag: 'div',
                        classList: ['expander', 'fa-solid', 'show-on-hover'],
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
                        checked: todoItem.done
                    });
        
                    // checkboxInput.checked = todoItem.done;
                    checkboxInput.addEventListener('change', () => pubSub.publish('toggleItemDone', {id: todoItem.id}));
        
                    return checkboxContainer;
                }

                function _createDeleteButton(todoItem) {
                    const button = createElement({
                        tag: 'div',
                        classList: ['delete-item', 'fa-solid', 'fa-trash-can', 'hide', 'show-on-hover'],
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

        return {
            generateContent,
            updateContent,
            updateTodoItem,
        }
    })();

    function getActiveProject() {
        return _activeProject;
    }

    function setActiveProject(project) {
        if (project) {
            _activeProject = project;
        }
        else if (todoList.projects.length > 0) {
            _activeProject = todoList.projects[0];
        }
        else {
            return;
        }

        // Highlight the active project in the sidebar:
        const projects = todoList.projects;
        for (let i = 0; i < projects.length; i++) {
            document.querySelector(`#${projects[i].id}`)?.classList.remove('active');
        }
        
        document.querySelector(`#${_activeProject.id}`)?.classList.add('active');
    }

    function updateProject(project) {
        const newProjectElement = projectsDisplayModule.generateProjectItem(project);
        document.querySelector('#' + project.id)?.replaceWith(newProjectElement);

        setActiveProject(_activeProject);
    }

    function _expandCollapseTodoItem(todoItem) {
        todoItem.expanded = !todoItem.expanded;

        itemsDisplayModule.updateTodoItem(todoItem);
    }

    return {
        generateContent,
        updateProject,
        setActiveProject,
        getActiveProject,
        updateTodoItem: itemsDisplayModule.updateTodoItem,
        updateContent: itemsDisplayModule.updateContent,
    };
})();

const footerDisplayModule = (function() {
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
    function renderSite(projects) {
        // Render the site (including header and footer).

        deleteAllChildren('div#site');

        const site = document.querySelector('div#site');
        site?.appendChild(headerDisplayModule.generateHeader());
        site?.appendChild(contentDisplayModule.generateContent(projects)); //, activeProject));
        site?.appendChild(footerDisplayModule.generateFooter());
    }

    function updateContent(projects) {
        // Render site content (sidebar and todo list items).
        
        const content = document.querySelector('.site__content');
        const updatedContent = contentDisplayModule.generateContent(projects, contentDisplayModule.getActiveProject());
        content?.replaceWith(updatedContent);
    }

    return {
        renderSite,
        updateContent,
        updateTodoItem: contentDisplayModule.updateTodoItem,
        updateTodoItems: contentDisplayModule.updateContent,
        updateProject: contentDisplayModule.updateProject,
        getActiveProject: contentDisplayModule.getActiveProject,
        setActiveProject: contentDisplayModule.setActiveProject,
    };
})();

export { display };