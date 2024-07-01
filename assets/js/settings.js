export let Symbols = false;
export let Numbers = false;

export const initSettings = () => {
    const symbolsSwitch = document.getElementById('toggle-symbols');
    const numbersSwitch = document.getElementById('toggle-numbers');

    if (symbolsSwitch) {
        symbolsSwitch.addEventListener('change', function() {
            Symbols = this.checked;
        });
    }

    if (numbersSwitch) {
        numbersSwitch.addEventListener('change', function() {
            Numbers = this.checked;
        });
    }
};
