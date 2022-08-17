const Priority = Object.freeze({
    High: 1,
    Normal: 0,
    Low: -1,
});

function createTodoItem(title, desc, dueDate, priority = Priority.Normal, notes) {
    return {
        title,
        desc,
        dueDate,
        priority,
        notes
    }
}

export { Priority, createTodoItem }