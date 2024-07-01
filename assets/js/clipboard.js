export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

export const initClipboard = (firstPasswordEl, secondPasswordEl) => {
    firstPasswordEl.addEventListener('click', () => copyToClipboard(firstPasswordEl.textContent));
    secondPasswordEl.addEventListener('click', () => copyToClipboard(secondPasswordEl.textContent));
};
