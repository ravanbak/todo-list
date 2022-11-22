import { v4 as uuidv4, v4 } from 'uuid';

const Priority = Object.freeze({
    High: 1,
    Normal: 0,
    Low: -1,
});

function createTodoItem(title, description, dueDate, priority = Priority.Normal, notes, done = false) {
    const id = 'item-' + uuidv4();

    function getPriorityString() {
        switch (+this.priority) {
            case Priority.Low:
                return 'Low';
                break;
            case Priority.High:
                return 'High';
                break;
            default:
                return 'Normal';
        }
    }

    return {
        id,
        done,
        title,
        description,
        dueDate,
        priority,
        getPriorityString,
        notes,
    }
}

export { Priority, createTodoItem }