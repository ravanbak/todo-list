import "./style.css";
import * as pubSub from './pubsub';
import { display } from './display';
import { todoList } from "./todo-list";
import { Priority } from "./todo-item";

const controller = (function() {
    const _DEFAULT_PROJECT_NAME = 'To Do';

    let _activeProject;

    const init = (function() {
        _activeProject = todoList.addProject(_DEFAULT_PROJECT_NAME);

        pubSub.subscribe('addProject', data => {
            _activeProject = todoList.addProject(data.name);

            _updatePage();
        });
        
        pubSub.subscribe('deleteProject', data => {
            if (!todoList.deleteProject(data.projectName)) {
                return;
            }
            
            _updatePage();
        });
        
        pubSub.subscribe('selectProject', data => { 
            _activeProject = todoList.getProject(data.name);

            _updatePage();
        });

        pubSub.subscribe('addItem', () => {
            const todoItem = todoList.addTodoItem(_activeProject, ' ', ' ', Date.now(), Priority.Normal, ' ')
            todoItem.expanded = true;

            _updatePage();
        });

        pubSub.subscribe('deleteItem', data => {
            todoList.deleteTodoItem(_activeProject, data.id);

            _updatePage();
        });

        pubSub.subscribe('toggleItemDone', data => {
            const todoItem = todoList.toggleTodoItemDone(_activeProject, data.id);

            display.updateTodoItem(todoItem);
        });

        _updatePage();
    })();

    function _updatePage() {
        display.updateContent(todoList.getProjects(), _activeProject);
    }

    const createTestData = (function() {
        const project = todoList.getProject(_DEFAULT_PROJECT_NAME);
        todoList.addTodoItem(project, 'finish this project', 'this project is a todo list', new Date('September 5, 2022 09:30:00'), Priority.High, 'check the box when done');
        todoList.addTodoItem(project, 'add button to expand/collapse all todo items', '', new Date('September 6, 2022 09:30:00'));
        todoList.addTodoItem(project, 'add box shadows', 'cross off', new Date('September 7, 2022 09:30:00'), Priority.Low);
        todoList.addTodoItem(project, 'allow editing project names', 'project', new Date('September 6, 2022 15:30:00'), Priority.Normal,'in-place editing?');
        todoList.addTodoItem(project, 'allow editing todo item properties', 'in-place editing', new Date('September 6, 2022 15:30:00'));
        todoList.addTodoItem(project, 'move completed items to the end of the list', 'animated?', new Date('September 6, 2022 15:30:00'), Priority.Normal, 'should this be automatic?');
        todoList.addTodoItem(project, 'this item date is the latest', '', new Date('January 1, 2023 09:30:00'));
        todoList.addTodoItem(project, 'allow sorting of todo items', '', new Date('October 11, 2022 09:30:00'), Priority.High);
        todoList.addTodoItem(project, 'allow deleting todo items', '', new Date('November 12, 2022 12:15:00'), Priority.High);
        todoList.addTodoItem(project, 'allow adding projects', '', new Date('December 16, 2022 18:30:00'), Priority.Low);
        todoList.addTodoItem(project, 'allow deleting projects');
        todoList.addTodoItem(project, 'allow custom sort of projects');
        
        const projectGroceries = todoList.addProject('Groceries');
        todoList.addTodoItem(projectGroceries,'bananas');
        todoList.addTodoItem(projectGroceries,'nectarines', '', null, Priority.Low);
        todoList.addTodoItem(projectGroceries,'apples');
        todoList.addTodoItem(projectGroceries,'plantains');
        todoList.addTodoItem(projectGroceries,'flour', 'gluten free', Date.now(), Priority.High, 'President\'s Choice');
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

})();

display.renderSite(todoList.getProjects(), todoList.getProject('To Do'));