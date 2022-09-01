function createProject(name) {
    let _todoItems = [];

    function addTodoItem(todoItem) {
        _todoItems.unshift(todoItem);
    }

    function deleteTodoItem(id) {
        const idx = _todoItems.findIndex(el => el.id === id);
            
        if (idx < 0) {
            console.log(`Todo item not found!`);
        }
        else {
            _todoItems.splice(idx, 1);
        }

        return (idx > -1);
    }

    function getTodoItem(id) {
        return _todoItems.find(el => el.id === id);
    }

    function getTodoItems() {
        return _todoItems;
    }

    return {
        name,
        addTodoItem,
        deleteTodoItem,
        getTodoItem,
        getTodoItems,
    }
}

export { createProject }