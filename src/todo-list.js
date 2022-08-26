import * as projectModule from './todo-project';
import * as itemModule from './todo-item';
import { compareAsc } from 'date-fns'

const todoList = (function() {
    let _projects = [];

    const init = (function(){

    })();

    const getProjects = () => _projects;
    const getProjectNames = () => _projects.map(el => el.name);

    function addProject(projectName) {
        const project = projectModule.createProject(projectName);

        if (project) {
            _projects.push(project);

            return project;
        }
    }

    function deleteProject(projectName) {
        const idx = _projects.findIndex((p) => p.name === projectName );

        if (idx < 0) {
            console.log(`Project "${projectName}" not found!`);
        } 
        else {
            _projects.splice(idx, 1);
        }
        
        return (idx > -1);
    }

    function getProject(projectName) {
        const idx = _projects.findIndex((p) => p.name === projectName );

        if (idx < 0) {
            console.log(`Project "${projectName}" not found!`);
        }
        else {
            return _projects[idx];
        }
    }

    function addTodoItem(projectName, title, desc, dueDate, priority, notes) {
        const p = getProject(projectName);
        if (!p) {
            console.log(`Project "${projectName}" not found!`);

            return;
        }

        const todoItem = itemModule.createTodoItem(title, desc, dueDate, priority, notes);

        p.addTodoItem(todoItem);
    }

    function deleteTodoItem(projectName, title) {
        const p = getProject(projectName);
        if (!p) {
            console.log(`Project "${projectName}" not found!`);

            return false;
        }

        return p.deleteTodoItem(title);
    }

    return {
        addProject,
        deleteProject,
        getProject,
        getProjects,
        getProjectNames,
        addTodoItem,
        deleteTodoItem,
    }
})();

export { todoList };