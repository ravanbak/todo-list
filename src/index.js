import "./style.css";
import * as pubSub from './pubsub';
import { display } from './display';
import { todoList } from "./todo-list";

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
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'thing to do');
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'cross off thing to do after done');
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'cross off the cross off item');
        todoList.addTodoItem(_DEFAULT_PROJECT_NAME, 'finish making this site');

        const projectGroceries = todoList.addProject('Groceries');
        todoList.addTodoItem('Groceries','bananas');
        todoList.addTodoItem('Groceries','nectarines');
        todoList.addTodoItem('Groceries','apples');
        todoList.addTodoItem('Groceries','plantains');
        todoList.addTodoItem('Groceries','flour', 'gluten free', null, 'high', 'President\'s Choice');
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

// const projectNames = todoList.getProjectNames();

// console.log('PROJECTS:');

// projectNames.forEach(element => {
//     let p = todoList.getProject(element);

//     console.log(`[${p.name}]`);

//     let items = p.getTodoItems();

//     if (items) {
//         items.forEach(element => {
//             // console.log('>>>' + element.title);
//             for (p in element) {
//                 if (element[p]) {
//                     console.log(`> ${p}: ${element[p]}`);
//                 }
//             }
//         });
//     }
// });

display.renderSite(todoList.getProjects(), todoList.getProject('To Do'));