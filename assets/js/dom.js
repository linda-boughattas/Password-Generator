export const getElement = (id) => document.getElementById(id);

export const updateTextContent = (element, text) => {
    element.textContent = text;
};

export const addEventListener = (element, event, handler) => {
    element.addEventListener(event, handler);
};
