import { v4 as uuidv4, v4 } from 'uuid';

const Priority = Object.freeze({
    High: 1,
    Normal: 0,
    Low: -1,
});

function createTodoItem(title, desc, dueDate, priority = Priority.Normal, notes) {
    function hasDetails() {
        return (this.desc || this.dueDate || this.notes);
    }

    return {
        title,
        desc,
        dueDate,
        priority,
        notes,
        'id': 'id' + uuidv4(),
        done: false,
        hasDetails,
    }
}

export { Priority, createTodoItem }