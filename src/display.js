import * as pubSub from './pubsub';
import { addElement, deleteAllChildren } from './dom-util';

const display = (function() {
    function renderSite(projects, activeProject) {
        // Render entire site (including header and footer).

        deleteAllChildren('div#site');

        const site = document.querySelector('div#site');
        site?.appendChild(_generateHeader());
        site?.appendChild(_generateContent(projects, activeProject));
        site?.appendChild(_generateFooter());
    }

    function showMessage(message) {
        console.log(`EVENT MESSAGE: ${message}`);
    }

    function _generateHeader() {
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

    function _generateContent(projects, activeProject) {
        const pageContent = addElement({
            tag: 'div', 
            classList: ['container', 'site__content'],
        });

        const sidebarContainer = addElement({
            tag: 'div', 
            parent: pageContent, 
            classList: [ 'site__sidebar' ],
        });
        
        sidebarContainer.appendChild(_generateSidebar(projects));

        const pageContainer = addElement({
            tag: 'div', 
            parent: pageContent, 
            classList: [ 'site__page' ],
        });

        pageContainer.appendChild(_generatePage(activeProject));

        return pageContent;
    }

    function updateContent(projects, activeProject) {
        // Render site content (sidebar and todo list items).
        
        const page = document.querySelector('.site__content');
        const updatedPage = _generateContent(projects, activeProject);
        page?.replaceWith(updatedPage);
    }

    function _generateSidebar(projects) {
        const sidebar = addElement({
            tag: 'div',
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

            li.addEventListener('click', () => pubSub.publish('selectProject', { name: projects[i].name }));
        }

        return sidebar;
    }

    function _generatePage(project) {
        const page = document.createElement('div');
        page.classList.add('container', 'todo-list');
        
        const todoList = project.getTodoItems();
        for (let i = 0; i < todoList.length; i++) {
            page.appendChild(_generateTodoCard(todoList[i]));
        }

        return page;
    }

    function _generateTodoCard(todoItem) {
        const divTodoCard = addElement({
            tag: 'div',
            classList: [ 'todo-card' ],
        });

        const checkboxInput = addElement({
            tag: 'input',
            parent: divTodoCard,
            type: 'checkbox',
            name: todoItem.title,
        });

        const label = addElement({
            tag: 'label',
            parent: divTodoCard,
            textContent: todoItem.title
        });
        label.style.for = todoItem.title;

        return divTodoCard;
    }

    function _generateFooter() {
        const footer = addElement({
            tag: 'div', 
            classList: [ 'site__footer' ],
        });    
        const footerContent = addElement({
            tag: 'div',
            parent: footer, 
            classList: [ 'footer__inner' ],
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
            classList: [ 'fa-brands', 'fa-github-square', 'fa-2x' ],
        });
    
        return footer;
    }

    return {
        renderSite,
        updateContent,
        showMessage,
    };
})();

export { display };