let characters =[ ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]]
let firstPasswordEl=document.getElementById("firstPassword")
let secondPasswordEl=document.getElementById("secondPassword")
let random=""
let Symbols=false
let Numbers=false

// letting user choose between adding symbols and characters or not
document.addEventListener('DOMContentLoaded', function() {
    let symbolsSwitch = document.getElementById('toggle-symbols');
    let numbersSwitch = document.getElementById('toggle-numbers');

    if (symbolsSwitch) {
        symbolsSwitch.addEventListener('change', function() {
            if (this.checked) {
                Symbols=true   
            } else { 
                Symbols=false
            }
        });
    }

    if (numbersSwitch) {
        numbersSwitch.addEventListener('change', function() {
            if (this.checked) {
                Numbers=true
            } else {
                Numbers=false
            }
        });
    }
});

function Generate(){
    let myNumberEl = document.getElementById("myNumber").value;
    update()
    if (!Symbols && !Numbers) {
        for(let i=0; i<myNumberEl; i++){
            random=characters[0][Math.floor(Math.random() * characters[0].length)]
            firstPasswordEl.textContent+=random
            random=characters[0][Math.floor(Math.random() * characters[0].length)]
            secondPasswordEl.textContent+=random
        }
    } else if (Symbols && !Numbers){
        for(let i=0; i<myNumberEl; i++){
            let j= Math.floor(Math.random() * 2)
            random=characters[j][ Math.floor(Math.random() * characters[j].length)]
            firstPasswordEl.textContent+=random

            j= Math.floor(Math.random() * 2)
            random=characters[j][ Math.floor(Math.random() * characters[j].length)]
            secondPasswordEl.textContent+=random
        }
    } else if (!Symbols && Numbers){
        for(let i=0; i<myNumberEl; i++){
            let j= Math.floor(Math.random() * 2) 
            if (j=== 1){j+=1}
            random=characters[j][ Math.floor(Math.random() * characters[j].length)]
            firstPasswordEl.textContent+=random

            j= Math.floor(Math.random() * 2)
            if (j=== 1){j+=1}
            random=characters[j][ Math.floor(Math.random() * characters[j].length)]
            secondPasswordEl.textContent+=random
        }
    } else {
        for(let i=0; i<myNumberEl; i++){
            let j= Math.floor(Math.random() * 3)
            random=characters[j][ Math.floor(Math.random() * characters[j].length)]
            firstPasswordEl.textContent+=random

            j= Math.floor(Math.random() * 3)
            random=characters[j][ Math.floor(Math.random() * characters[j].length)]
            secondPasswordEl.textContent+=random
        } 
    }

}

function update(){
    firstPasswordEl.textContent =""
    secondPasswordEl.textContent =""
}

//"Click to copy"
function setTooltip1() {
    firstPasswordEl.setAttribute('title', 'Click to copy');
}
function setTooltip2() {
    secondPasswordEl.setAttribute('title', 'Click to copy');
}


firstPasswordEl.addEventListener('mouseenter', setTooltip1);
secondPasswordEl.addEventListener('mouseenter', setTooltip2);


function resetTooltip1() {
    firstPasswordEl.setAttribute('title', '');
}
function resetTooltip2() {
    secondPasswordEl.setAttribute('title', '');
}
firstPasswordEl.addEventListener('mouseleave', resetTooltip1);
secondPasswordEl.addEventListener('mouseleave', resetTooltip2);


//Copying
const copyContent1 = async () => {
    try {
        await navigator.clipboard.writeText(firstPasswordEl.textContent);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const copyContent2 = async () => {
    try {
        await navigator.clipboard.writeText(secondPasswordEl.textContent);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}