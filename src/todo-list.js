import * as projectModule from './todo-project';
import * as itemModule from './todo-item';

const todoList = (function() {
    const _DEFAULT_PROJECT_NAME = 'To Do';

    let _projects = [];

    const init = (function(){
        addProject(_DEFAULT_PROJECT_NAME);
    })();

    const getProjectNames = () => _projects.map(el => el.name);

    function addProject(projectName) {
        // Create a default project.
        const project = projectModule.createProject(projectName);
        _projects.push(project);

        return project;
    }

    function deleteProject(projectName) {
        const idx = getProjectNames().indexOf(projectName);

        if (idx > -1) {
            _projects.splice(idx, 1);
        }
    }

    function getProject(projectName) {
        const idx = getProjectNames().indexOf(projectName);

        if (idx < 0) {
            console.log(`Project "${projectName}" not found!`);
        }
        else {
            return _projects[idx];
        }
    }

    function addTodoItem(projectName = _DEFAULT_PROJECT_NAME, title, desc, dueDate, priority = 'normal', notes) {
        const p = getProject(projectName);
        if (!p) {
            console.log(`Project "${projectName}" not found!`);

            return;
        }

        const todoItem = itemModule.createTodoItem(title, desc, dueDate, priority, notes);

        p.addTodoItem(todoItem);
    }

    function deleteTodoItem(projectName = _DEFAULT_PROJECT_NAME, title) {
        const p = getProject(projectName);
        if (!p) {
            console.log(`Project "${projectName}" not found!`);

            return;
        }

        p.deleteTodoItem(title);
    }

    return {
        addProject,
        deleteProject,
        getProject,
        getProjectNames,
        addTodoItem,
        deleteTodoItem,
    }
})();

export { todoList };