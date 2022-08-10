import { todoList } from "./todo-list";

todoList.addTodoItem(undefined, 'thing to do');

const projectGroceries = todoList.addProject('Groceries');
todoList.addTodoItem('Groceries','bananas');
todoList.addTodoItem('Groceries','apples');
todoList.addTodoItem('Groceries','plantains');
todoList.addTodoItem('Groceries','flour', 'gluten free', null, 'high', 'President\'s Choice');
todoList.deleteTodoItem('Groceries', 'apples');

const projectNames = todoList.getProjectNames();

console.log('PROJECTS:');

projectNames.forEach(element => {
    let p = todoList.getProject(element);

    console.log(p.name);

    let items = p.getTodoItems();

    if (items) {
        items.forEach(element => {
            // console.log('>>>' + element.title);
            for (p in element) {
                if (element[p]) {
                    console.log(`>>> ${p}: ${element[p]}`);
                }
            }
        });
    }
});