import { getElement } from './dom.js';
import { initSettings, Symbols, Numbers } from './settings.js';
import { updatePasswords } from './passwordGenerator.js';
import { initTooltips } from './tooltip.js';
import { initClipboard } from './clipboard.js';

document.addEventListener('DOMContentLoaded', function() {
    const firstPasswordEl = getElement('firstPassword');
    const secondPasswordEl = getElement('secondPassword');

    initSettings();
    initTooltips(firstPasswordEl, secondPasswordEl);
    initClipboard(firstPasswordEl, secondPasswordEl);

    const generateButton = getElement('generateButton');
    generateButton.addEventListener('click', () => {
        const length = parseInt(getElement('myNumber').value, 10);
        updatePasswords(length, Symbols, Numbers, firstPasswordEl, secondPasswordEl);
    });
});
