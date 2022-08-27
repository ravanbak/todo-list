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
                li.style.backgroundColor = '#55FF44';
                li.style.fontWeight = 'bold';
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
    function generateContent(projects, activeProject) {
        const pageContent = addElement({
            tag: 'div', 
            classList: ['container', 'site__content'],
        });

        pageContent.appendChild(sidebar.generateSidebar(projects, activeProject));

        const pageContainer = addElement({
            tag: 'div', 
            parent: pageContent, 
            classList: [ 'site__page' ],
        });

        pageContainer.appendChild(_generatePage(activeProject));

        return pageContent;
    }

    function _generatePage(project) {
        const page = document.createElement('div');
        page.classList.add('container', 'todo-list');
        
        const todoList = project.getTodoItems();
        for (let i = 0; i < todoList.length; i++) {
            page.appendChild(todoCard.generateTodoCard(todoList[i]));
        }

        return page;
    }

    const todoCard = (function(todoItem) {
        const _getPriorityColor = (p) => {
            switch (p) {
                case Priority.High:
                    return 'red';
                    break;
                case Priority.Low:
                    return '#EEDD00';
                    break;
                default:
                    return '#55FF44';
            }
        }

        function generateTodoCard(todoItem) {
            const divTodoCard = addElement({
                tag: 'div',
                classList: ['todo-card'],
                id: todoItem.id,
            });

            const divTodoBasic = addElement({
                tag: 'div',
                parent: divTodoCard,
                classList: ['todo-card__basic'],
            });

            if (todoItem.done) {
                divTodoBasic.classList.add('todo-done');
            }

            const checkboxContainer = addElement({
                tag: 'div',
                parent: divTodoBasic,
                classList: ['checkbox'],
            });
            checkboxContainer.style.backgroundColor = _getPriorityColor(todoItem.priority);

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

                    divTodoDetails.appendChild(_generateExpandedTodoValues(todoItem));
                } 
                else {
                    arrow.classList.add('fa-angle-down');
                }
            }

            return divTodoCard;
        }
    
        function _generateExpandedTodoValues(todoItem) {
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