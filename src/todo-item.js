import { v4 as uuidv4, v4 } from 'uuid';

const Priority = Object.freeze({
    High: 1,
    Normal: 0,
    Low: -1,
});

function createTodoItem(title, description, dueDate, priority = Priority.Normal, notes, done = false) {
    const id = 'item-' + uuidv4();

    return {
        id,
        done,
        title,
        description,
        dueDate,
        priority,
        notes,
    }
}

export { Priority, createTodoItem }