import { v4 as uuidv4, v4 } from 'uuid';

const Priority = Object.freeze({
    High: 1,
    Normal: 0,
    Low: -1,
});

function createTodoItem(title, description, dueDate, priority = Priority.Normal, notes) {
    let _done = false;

    function hasDetails() {
        return (this.description || this.dueDate || this.notes);
    }

    function toggleDone() {
        _done = !_done;
    }

    function isDone() {
        return _done;
    }

    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        'id': 'id' + uuidv4(),
        hasDetails,
        isDone,
        toggleDone,
    }
}

export { Priority, createTodoItem }