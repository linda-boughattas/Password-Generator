import { characters } from './data.js';
import { updateTextContent } from './dom.js';

export const generatePassword = (length, useSymbols, useNumbers, element) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        let j;
        if (!useSymbols && !useNumbers) {
            j = 0;
        } else if (useSymbols && !useNumbers) {
            j = Math.floor(Math.random() * 2);
        } else if (!useSymbols && useNumbers) {
            j = Math.floor(Math.random() * 2);
            if (j === 1) j += 1;
        } else {
            j = Math.floor(Math.random() * 3);
        }
        const randomChar = characters[j][Math.floor(Math.random() * characters[j].length)];
        password += randomChar;
    }
    updateTextContent(element, password);
};

export const updatePasswords = (length, useSymbols, useNumbers, firstPasswordEl, secondPasswordEl) => {
    updateTextContent(firstPasswordEl, '');
    updateTextContent(secondPasswordEl, '');
    generatePassword(length, useSymbols, useNumbers, firstPasswordEl);
    generatePassword(length, useSymbols, useNumbers, secondPasswordEl);
};
