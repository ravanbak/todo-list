import "./style.css";
import * as pubSub from './pubsub';
import { display } from './display';
import { todoList, saveToLocalStorage, getFromLocalStorage } from "./todo-list";
import { Priority } from "./todo-item";

const controller = (function() {
    const init = (function() {
        pubSub.subscribe('addProject', data => {
            display.setActiveProject(todoList.addProject(data.projectName));

            _updateContent();
        });
        
        pubSub.subscribe('deleteProject', data => {
            if (!todoList.deleteProject(data.id)) {
                return;
            }
            
            _updateContent();
        });
        
        pubSub.subscribe('selectProject', data => { 
            display.setActiveProject(todoList.getProject(data.id));

            display.updatePage();
        });

        pubSub.subscribe('addItem', data => {
            const proj = display.getActiveProject();
            todoList.addTodoItem(proj, '', '', Date.now(), Priority.Normal, '', data.isPending)

            display.updatePage();
        });

        pubSub.subscribe('confirmItem', () => {
            display.getActiveProject()?.confirmPendingTodoItem();

            display.updatePage();
        });

        pubSub.subscribe('deleteItem', data => {
            todoList.deleteTodoItem(display.getActiveProject(), data.id);

            display.updatePage();
        });

        pubSub.subscribe('changeItem', data => {
            todoList.changeTodoItem(display.getActiveProject(), data);

            display.updateTodoItem(display.getActiveProject().getTodoItem(data.id));
        });

        pubSub.subscribe('changeProject', data => {
            todoList.changeProject(data);

            display.updateProject(todoList.getProject(data.id));
        });

        pubSub.subscribe('toggleItemDone', data => {
            const todoItem = todoList.toggleTodoItemDone(display.getActiveProject(), data.id);

            display.updateTodoItem(todoItem);
        });

        // Save the entire todo list to local storage when any
        // of the below events are fired:
        pubSub.subscribe('addProject', saveToLocalStorage);
        pubSub.subscribe('deleteProject', saveToLocalStorage);
        pubSub.subscribe('addItem', saveToLocalStorage);
        pubSub.subscribe('confirmItem', saveToLocalStorage);
        pubSub.subscribe('deleteItem', saveToLocalStorage);
        pubSub.subscribe('changeItem', saveToLocalStorage);
        pubSub.subscribe('changeProject', saveToLocalStorage);
        pubSub.subscribe('toggleItemDone', saveToLocalStorage);
    })();

    function _updateContent() {
        // Update sidebar and page.
        display.updateContent(todoList.getProjects(), display.getActiveProject());
    }

    const createTestData = (function() {
        localStorage.clear();

        const project = todoList.addProject('To Do');
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
    });

    return {
        createTestData, 
    }
})();

const useLocalStorage = true;

if (useLocalStorage) {
    const loadedFromLocalStorage = getFromLocalStorage();
    
    if (!loadedFromLocalStorage) {
        console.log('No todo list data found in local storage.');
    
        const _DEFAULT_PROJECT_NAME = 'To Do';
        display.setActiveProject(todoList.addProject(_DEFAULT_PROJECT_NAME).id);
    }
} 
else {
    controller.createTestData();
    if (todoList.projects.length > 0) {
        display.setActiveProject(todoList.projects[0]);
    }
}

display.renderSite(todoList.getProjects());