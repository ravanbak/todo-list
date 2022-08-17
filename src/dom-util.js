export function addElement({ tag, 
                                parent, 
                                classList, 
                                id, 
                                textContent,
                                type,
                                name }) {
    if (!tag) return;

    const el = document.createElement(tag);

    if (textContent) el.textContent = textContent;   
    if (classList) el.classList.add(...classList);
    if (id) el.id = id;
    if (type) el.type = type;
    if (name) el.name = name;
    
    if (parent) {
        parent.appendChild(el);
    }

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