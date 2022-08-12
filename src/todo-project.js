function createProject(name) {
    let _todoItems = [];

    // const _todoItemNames = () => _todoItems.map(el => el.name);

    function addTodoItem(todoItem) {
        _todoItems.push(todoItem);
    }

    function deleteTodoItem(title) {
        const idx = _todoItems.findIndex((el) => el.title === title );
            
        if (idx < 0) {
            console.log(`Todo item ${title} not found!`);
        }
        else {
            _todoItems.splice(idx, 1);
        }

        return (idx > -1);
    }

    function getTodoItems() {
        return _todoItems;
    }

    return {
        name,
        addTodoItem,
        deleteTodoItem,
        getTodoItems,
    }
}

export { createProject }