import "./style.css";
import * as pubSub from './pubsub';
import { display } from './display';
import { todoList } from "./todo-list";
import { Priority } from "./todo-item";

const controller = (function() {
    const _DEFAULT_PROJECT_NAME = 'To Do';
    let _DEFAULT_PROJECT_ID;

    let _activeProject;

    const init = (function() {
        _setActiveProject(todoList.addProject(_DEFAULT_PROJECT_NAME).id);
        _DEFAULT_PROJECT_ID = _activeProject.id;

        pubSub.subscribe('addProject', data => {
            _activeProject = todoList.addProject(data.name);

            _updateContent();
        });
        
        pubSub.subscribe('deleteProject', data => {
            if (!todoList.deleteProject(data.id)) {
                return;
            }
            
            _updateContent();
        });
        
        pubSub.subscribe('selectProject', data => { 
            _setActiveProject(data.id);
            display.updatePage();
        });

        pubSub.subscribe('addItem', data => {
            const todoItem = todoList.addTodoItem(_activeProject, '', '', Date.now(), Priority.Normal, '', data.isPending)

            display.updatePage();
        });

        pubSub.subscribe('confirmItem', () => {
            _activeProject?.confirmPendingTodoItem();

            display.updatePage();
        });

        pubSub.subscribe('deleteItem', data => {
            todoList.deleteTodoItem(_activeProject, data.id);

            display.updatePage();
        });

        pubSub.subscribe('changeItem', data => {
            todoList.changeTodoItem(_activeProject, data);

            display.updateTodoItem(_activeProject.getTodoItem(data.id));
        });

        pubSub.subscribe('changeProject', data => {
            todoList.changeProject(data);

            display.updateProject(todoList.getProject(data.id));
        });

        pubSub.subscribe('toggleItemDone', data => {
            const todoItem = todoList.toggleTodoItemDone(_activeProject, data.id);

            display.updateTodoItem(todoItem);
        });

        _updateContent();
    })();

    function _setActiveProject(id) {
        _activeProject = todoList.getProject(id)
        display.setActiveProject(_activeProject);
    }

    function _updateContent() {
        // Update sidebar and page.
        display.updateContent(todoList.getProjects(), _activeProject);
    }

    const createTestData = (function() {
        const project = todoList.getProject(_DEFAULT_PROJECT_ID);
        todoList.addTodoItem(project, 'finish this project', 'this project is a todo list', '2022-10-09', Priority.High, 'check the box when done');
        todoList.addTodoItem(project, 'add button to expand/collapse all todo items');
        todoList.addTodoItem(project, 'add box shadows', 'cross off', '', Priority.Low);
        todoList.addTodoItem(project, 'allow editing project names', 'project', '', Priority.Normal,'in-place editing?');
        todoList.addTodoItem(project, 'allow editing todo item properties', 'in-place editing', '');
        todoList.addTodoItem(project, 'move completed items to the end of the list', 'animated?', '', Priority.Normal, 'should this be automatic?');
        todoList.addTodoItem(project, 'this item date is the latest', '');
        todoList.addTodoItem(project, 'allow sorting of todo items', '');
        todoList.addTodoItem(project, 'allow deleting todo items', '');
        todoList.addTodoItem(project, 'allow adding projects', '');
        todoList.addTodoItem(project, 'allow deleting projects');
        todoList.addTodoItem(project, 'allow custom sort of projects', '', '2022-12-16');
        
        const projectGroceries = todoList.addProject('Groceries');
        todoList.addTodoItem(projectGroceries,'bananas');
        todoList.addTodoItem(projectGroceries,'nectarines', '', null, Priority.Low);
        todoList.addTodoItem(projectGroceries,'apples');
        todoList.addTodoItem(projectGroceries,'plantains');
        todoList.addTodoItem(projectGroceries,'flour', 'gluten free', '', Priority.High, 'President\'s Choice');
        todoList.addTodoItem(projectGroceries,'milk');
        todoList.addTodoItem(projectGroceries,'cream');
        todoList.addTodoItem(projectGroceries,'butter');
        todoList.addTodoItem(projectGroceries,'eggs');
        todoList.addTodoItem(projectGroceries,'bacon');
        todoList.addTodoItem(projectGroceries,'aged cheddar');

        const projectGarden = todoList.addProject('Garden');
        todoList.addTodoItem(projectGarden, 'transplant lettuce');
        todoList.addTodoItem(projectGarden, 'water tomato plants');
        todoList.addTodoItem(projectGarden, 'water cherry trees');

        const yard = todoList.addProject('Yard');
        todoList.addTodoItem(yard, 'mow lawn');
        todoList.addTodoItem(yard, 'level lawn');
        todoList.addTodoItem(yard, 'plant grass seed');
        todoList.addTodoItem(yard, 'set up sprinkler');
    })();

    return {
        defaultProjectID: _DEFAULT_PROJECT_ID,
    }
})();

display.renderSite(todoList.getProjects(), todoList.getProject(controller.defaultProjectID));