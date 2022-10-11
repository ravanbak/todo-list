import * as projectModule from './todo-project';
import * as itemModule from './todo-item';

const todoList = (function() {
    let _projects = [];
    
    const getProjects = () => _projects;
    const getProjectNames = () => _projects.map(el => el.name);

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

        todoItem?.toggleDone();

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
        addProject,
        deleteProject,
        getProject,
        getProjects,
        getProjectNames,
        addTodoItem,
        changeTodoItem,
        deleteTodoItem,
        toggleTodoItemDone,
    }
})();

export { todoList };