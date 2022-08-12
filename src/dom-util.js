export function addElement(parent, tagName, textContent, className, id) {
    const el = document.createElement(tagName);

    if (textContent) {
        el.textContent = textContent;
    }
    
    if (className) {
        el.classList.add(className);
    }

    if (id) {
        el.id = id;
    }

    parent.appendChild(el);

    return el;
}

export function deleteAllChildren(selector) {
    // Delete all children of the selected element 
    // and return the selected element.

    const parent = document.querySelector(selector);

    while (parent?.firstChild) {
        parent?.removeChild(parent?.lastChild);
    }

    return parent;
}