import { v4 as uuidv4, v4 } from 'uuid';
import { createTodoItem } from './todo-item';

function createProject(projectName) {
    const id = 'proj-' + uuidv4();
    
    let todoItems = [];
    let _pendingTodoItem; // todo item added through UI and not yet confirmed by user
    
    const _getTodoItemIndex = (id) => todoItems.findIndex(el => el.id === id);
    
    function addTodoItem(todoItem, isPending) {
        if (isPending) {
            // This item is to be confirmed by the user
            // before it is added to the project list.
            _pendingTodoItem = todoItem;
        } 
        else {
            todoItems.unshift(todoItem);
        }

        return todoItem;
    }

    function changeTodoItem(modifiedTodoItem) {
        let item = getTodoItem(modifiedTodoItem.id);
        if (!item) {
            console.log(`Item ${modifiedTodoItem?.id} not found in ${this.projectName}`);
            return item;
        }
        
        item = Object.assign(item, modifiedTodoItem);

        if (isPendingTodoItem(item)) {
            confirmPendingTodoItem();
        }

        return item;
    }

    function deleteTodoItem(id) {
        if (id === _pendingTodoItem?.id) {
            // Cancel the pending todo item.
            _pendingTodoItem = null;

            return true;
        }

        const idx = _getTodoItemIndex(id);
        
        if (idx < 0) {
            console.log(`Todo item not found!`);
        }
        else {
            todoItems.splice(idx, 1);
        }

        return (idx > -1);
    }

    function getTodoItem(id) {
        let item = todoItems.find(el => el.id === id);
        
        if (!item && id === _pendingTodoItem?.id) {
            item = _pendingTodoItem;
        }
        
        return item;
    }

    function isPendingTodoItem(todoItem) {
        return todoItem?.id === _pendingTodoItem?.id;
    }

    function getPendingTodoItem() {
        return _pendingTodoItem;
    }

    function confirmPendingTodoItem() {
        if (!_pendingTodoItem) {
            console.log('No pending todo item to confirm!');
            return false;
        }

        addTodoItem(_pendingTodoItem, false);
        
        _pendingTodoItem = null;

        return true;
    }

    return {
        id,
        todoItems,
        projectName,
        addTodoItem,
        changeTodoItem,
        deleteTodoItem,
        getTodoItem,
        getPendingTodoItem,
        isPendingTodoItem,
        confirmPendingTodoItem,
    }
}

export { createProject }