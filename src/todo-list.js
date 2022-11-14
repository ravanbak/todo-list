import * as projectModule from './todo-project';
import * as itemModule from './todo-item';

const LOCAL_STORAGE_ID = 'todolist-d9ca00ce-6574-42bd-bf2e-de22444f4ff5';

const todoList = (function() {
    let _projects = [];
        
    const getProjects = () => _projects;
    const getProjectNames = () => _projects.map(el => el.projectName);

    function addProject(projectName) {
        const project = projectModule.createProject(projectName);

        if (project) {
            _projects.push(project);

            return project;
        }
    }

    function deleteProject(projectID) {
        const idx = _projects.findIndex((p) => p.id === projectID );

        if (idx < 0) {
            console.log('Project not found!');
        } 
        else {
            _projects.splice(idx, 1);
        }
        
        return (idx > -1);
    }

    function changeProject(data) {
        const idx = _projects.findIndex(p => p.id === data.id);

        if (idx < 0) {
            console.log('Project not found!');
        }
        else {
            const project = Object.assign(_projects[idx], data);
            
            return project;
        }
    }

    function getProject(projectID) {
        const idx = _projects.findIndex(p => p.id === projectID);

        if (idx < 0) {
            console.log('Project not found!');
        }
        else {
            return _projects[idx];
        }
    }

    function addTodoItem(project, title, description, dueDate, priority, notes, isPending) {
        if (!project) {
            console.log(`Project not found!`);

            return;
        }

        const todoItem = itemModule.createTodoItem(title, description, dueDate, priority, notes);

        project.addTodoItem(todoItem, isPending);

        return todoItem;
    }

    function toggleTodoItemDone(project, id) {
        const todoItem = project.getTodoItem(id);

        todoItem.done = !todoItem.done;

        return todoItem;
    }

    function changeTodoItem(project, modifiedTodoItem) {
        if (!project || !modifiedTodoItem.id) {
            console.log('Project or todo item not found.');
            return false;
        }

        project.changeTodoItem(modifiedTodoItem);

        return project;
    }

    function deleteTodoItem(project, id) {
        if (!project || !id) {
            console.log('Project or todo item not found.');
            return false;
        }

        project.deleteTodoItem(id);

        return project;
    }

    return {
        projects: _projects,
        addProject,
        deleteProject,
        changeProject,
        getProject,
        getProjects,
        getProjectNames,
        addTodoItem,
        changeTodoItem,
        deleteTodoItem,
        toggleTodoItemDone,
    }
})();

function saveToLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_ID);
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(todoList));
}

function getFromLocalStorage() {
    let projects = getStoredProjects();
    if (!projects || projects?.length === 0) {
        return false;
    }

    // Load stored data:
    for (let i = 0; i < projects.length; i++) {
        // Load project:
        let proj = todoList.addProject(''); // create an empty project object
        proj.id = projects[i].id;
        proj.projectName = projects[i].projectName;
        
        // Load the todo items in this project:
        let items = projects[i].todoItems;
        if (!items || items?.length === 0) {
            continue;
        }

        for (let j = items.length - 1; j >= 0; j--) {
            let item = itemModule.createTodoItem();
            Object.assign(item, items[j]);
            proj.addTodoItem(item, false);
        }
    }

    return true;

    function getStoredProjects() {
        const storage = localStorage.getItem(LOCAL_STORAGE_ID);

        if (!storage) {
            return null;
        }
    
        const data = JSON.parse(storage);
        if (!data) {
            return null;
        }
    
        const projects = data.projects;
        if (projects.length === 0) {
            return null;
        }

        return projects;
    }
}

export {
    todoList,
    saveToLocalStorage,
    getFromLocalStorage,
};