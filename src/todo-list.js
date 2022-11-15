import * as projectModule from './todo-project';
import * as itemModule from './todo-item';

const LOCAL_STORAGE_ID = 'todolist-d9ca00ce-6574-42bd-bf2e-de22444f4ff5';

const todoList = (function() {
    let projects = [];
        
    function addProject(projectName) {
        const project = projectModule.createProject(projectName);

        if (project) {
            projects.push(project);

            return project;
        }
    }

    function deleteProject(projectID) {
        const idx = projects.findIndex((p) => p.id === projectID );

        if (idx < 0) {
            console.log(`Project not found! Function: ${deleteProject.name}`);
        } 
        else {
            projects.splice(idx, 1);
        }
        
        return (idx > -1);
    }

    function changeProject(data) {
        const idx = projects.findIndex(p => p.id === data.id);

        if (idx < 0) {
            console.log(`Project not found! Function: ${changeProject.name}`);
            return;
        }

        return Object.assign(projects[idx], data);
    }

    function getProject(projectID) {
        const idx = projects.findIndex(p => p.id === projectID);

        if (idx < 0) {
            console.log(`Project not found! Function: ${getProject.name}`);
            return;
        }
        
        return projects[idx];
    }

    function addTodoItem(project, title, description, dueDate, priority, notes, isPending) {
        if (!project) {
            console.log(`Project not found!`);
            return;
        }

        const todoItem = itemModule.createTodoItem(title, description, dueDate, priority, notes);

        return project.addTodoItem(todoItem, isPending);
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

        return project.changeTodoItem(modifiedTodoItem);
    }

    function deleteTodoItem(project, id) {
        if (!project || !id) {
            console.log('Project or todo item not found.');
            return false;
        }

        return project.deleteTodoItem(id);
    }

    return {
        projects,
        addProject,
        deleteProject,
        changeProject,
        getProject,
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