import "./style.css";
import * as pubSub from './pubsub';
import { display } from './display';
import { todoList } from "./todo-list";
import { Priority } from "./todo-item";

const controller = (function() {
    const _DEFAULT_PROJECT_NAME = 'To Do';

    let _activeProjectName = _DEFAULT_PROJECT_NAME;

    const init = (function() {
        todoList.addProject(_DEFAULT_PROJECT_NAME);

        pubSub.subscribe('addProject', data => {
            if (!todoList.addProject(data.name)) {
                return;
            }

            _activeProjectName = data.name;
            _updatePage();
        });
        
        pubSub.subscribe('deleteProject', data => {
            if (!todoList.deleteProject(data.projectName)) {
                return;
            }
            
            _activeProjectName = _DEFAULT_PROJECT_NAME;
            _updatePage();
        });
        
        pubSub.subscribe('selectProject', data => { 
            _activeProjectName = data.name;
            _updatePage();
        });

        _updatePage();
    })();

    function _getActiveProject() {
        return todoList.getProject(_activeProjectName)
    }

    function _updatePage() {
        display.updateContent(todoList.getProjects(), _getActiveProject());
    }

    const createTestData = (function() {
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'finish this project', 'this project is a todo list', new Date('September 5, 2022 09:30:00'), Priority.High, 'note: check the box when done');
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'add button to expand/collapse all todo items', '', new Date('September 6, 2022 09:30:00'));
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'add box shadows', 'cross off', new Date('September 7, 2022 09:30:00'), Priority.Low);
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow editing project names', '', new Date('September 6, 2022 15:30:00'));
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow editing todo item properties', '', new Date('September 6, 2022 15:30:00'));
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'move completed items to the end of the list', '', new Date('September 6, 2022 15:30:00'));
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'this item date is the latest', '', new Date('January 1, 2023 09:30:00'));
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow sorting of todo items', '', new Date('October 11, 2022 09:30:00'), Priority.High);
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow deleting todo items', '', new Date('November 12, 2022 12:15:00'), Priority.High);
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow adding projects', '', new Date('December 16, 2022 18:30:00'), Priority.Low);
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow deleting projects');
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'allow custom sort of projects');
        
        const projectGroceries = todoList.addProject('Groceries');
        todoList.addTodoItem('Groceries','bananas');
        todoList.addTodoItem('Groceries','nectarines', '', null, Priority.Low);
        todoList.addTodoItem('Groceries','apples');
        todoList.addTodoItem('Groceries','plantains');
        todoList.addTodoItem('Groceries','flour', 'gluten free', Date.now(), Priority.High, 'President\'s Choice');
        todoList.addTodoItem('Groceries','milk');
        todoList.addTodoItem('Groceries','cream');
        todoList.addTodoItem('Groceries','butter');
        todoList.addTodoItem('Groceries','eggs');
        todoList.addTodoItem('Groceries','bacon');
        todoList.addTodoItem('Groceries','aged cheddar');
        todoList.deleteTodoItem('Groceries', 'apples');

        const projectGarden = todoList.addProject('Garden');
        todoList.addTodoItem('Garden', 'transplant lettuce');
        todoList.addTodoItem('Garden', 'water tomato plants');
        todoList.addTodoItem('Garden', 'water cherry trees');

        todoList.addProject('Yard');
        todoList.addTodoItem('Yard', 'mow lawn');
        todoList.addTodoItem('Yard', 'level lawn');
        todoList.addTodoItem('Yard', 'plant grass seed');
        todoList.addTodoItem('Yard', 'set up sprinkler');
    })();

})();

display.renderSite(todoList.getProjects(), todoList.getProject('To Do'));