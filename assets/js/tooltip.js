export const setTooltip = (element, text) => {
    element.setAttribute('title', text);
};

export const resetTooltip = (element) => {
    element.setAttribute('title', '');
};

export const initTooltips = (firstPasswordEl, secondPasswordEl) => {
    firstPasswordEl.addEventListener('mouseenter', () => setTooltip(firstPasswordEl, 'Click to copy'));
    secondPasswordEl.addEventListener('mouseenter', () => setTooltip(secondPasswordEl, 'Click to copy'));
    firstPasswordEl.addEventListener('mouseleave', () => resetTooltip(firstPasswordEl));
    secondPasswordEl.addEventListener('mouseleave', () => resetTooltip(secondPasswordEl));
};
