import * as pubSub from './pubsub';
import * as domUtil from './dom-util';

const display = (function() {
    function renderSite(projects, activeProject) {
        // Render entire site (including header and footer).

        domUtil.deleteAllChildren('div#site');

        const site = document.querySelector('div#site');
        site?.appendChild(_generateHeader());
        site?.appendChild(_generateContent(projects, activeProject));
        site?.appendChild(_generateFooter());
    }

    function updateContent(projects, activeProject) {
        // Render site content (sidebar and todo list items).
        
        const page = document.querySelector('.site__content');
        const updatedPage = _generateContent(projects, activeProject);
        page?.replaceWith(updatedPage);
    }

    function showMessage(message) {
        console.log(`EVENT MESSAGE: ${message}`);
    }

    function _generateHeader() {
        const header = document.createElement('div');
        header.classList.add('site__header');

        const divTitle = domUtil.addElement(header, 'div', '', 'hero-text');
        const h1 = domUtil.addElement(divTitle, 'h1', 'Todoodly');
    
        return header;
    }

    function _generateContent(projects, activeProject) {
        const pageContent = document.createElement('div');
        pageContent.classList.add('container', 'site__content');

        const sidebarContainer = domUtil.addElement(pageContent, 'div', '', 'site__sidebar');
        sidebarContainer.appendChild(_generateSidebar(projects));

        const pageContainer = domUtil.addElement(pageContent, 'div', '', 'site__page');
        pageContainer.appendChild(_generatePage(activeProject));

        return pageContent;
    }

    function _generateSidebar(projects) {
        const sidebar = document.createElement('div');
        sidebar.classList.add('container');
        sidebar.textContent = 'PROJECTS';

        const list = domUtil.addElement(sidebar, 'ul');

        for (let i = 0; i < projects.length; i++) {
            let li = domUtil.addElement(list, 'li', projects[i].name);
            li.addEventListener('click', () => pubSub.publish('selectProject', { name: projects[i].name }));
        }

        return sidebar;
    }

    function _generatePage(project) {
        const page = document.createElement('div');
        page.classList.add('container');
        
        const todoList = project.getTodoItems();
        for (let i = 0; i < todoList.length; i++) {
            domUtil.addElement(page, 'div', todoList[i].title, 'todo-item');
        }

        return page;
    }

    function _generateFooter() {
        const footer = document.createElement('div');
        footer.classList.add('site__footer');
    
        const footerContent = domUtil.addElement(footer, 'div', '', 'footer__inner');
    
        domUtil.addElement(footerContent, 'span', 'Copyright © 2022 David Ravanbakhsh');
    
        const a = domUtil.addElement(footerContent, 'a');
        a.href = 'https://github.com/ravanbak';
        a.target = '_blank';
    
        const i = domUtil.addElement(a, 'i');
        i.classList.add('fa-brands');
        i.classList.add('fa-github-square');
        i.classList.add('fa-2x');
    
        return footer;
    }

    return {
        renderSite,
        updateContent,
        showMessage,
    };
})();

export { display };