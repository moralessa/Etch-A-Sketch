const grid = document.getElementById('sketchGrid');
const btnBlack = document.getElementById('black');
const btnColor = document.getElementById('color');
const btnRainbow = document.getElementById('Rainbow');
const btnErase = document.getElementById('eraser')
const sizeValue = document.getElementById('sizeValue');
const slider = document.getElementById('sizeSlider');
const clear = document.getElementById('clear');


c = slider.value;
r = slider.value;


btnBlack.addEventListener('click', () => {
    blackColor();
})

btnRainbow.addEventListener('click', () =>{
    rainbowColor();
})

btnErase.addEventListener('click', () =>{
    erase();
})

btnColor.addEventListener('click', () =>{
    Color();
})

clear.addEventListener('click', () =>{
    reSet();
    createDivs(c, r);
})

slider.onmousemove = (e) => reSize();

function reSet(){
    const boxs = grid.querySelectorAll('.box');
    boxs.forEach(box => box.remove())
}
function reSize(){
    c = slider.value;
    r = slider.value;
    sizeValue.textContent = `${c} x ${r}`;
    reSet()
    createDivs(c, r);
}

function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); ++i){
        const div = document.createElement('div');
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
        grid.appendChild(div).classList.add('box');
    }
}

function blackColor(){
    const boxs = grid.querySelectorAll('.box');
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background = `rgb(61, 61, 61)`
        }))
}

function Color(){
    const boxs = grid.querySelectorAll('.box');
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background = `${color.value}`
        }))
}

function rainbowColor(){
    const boxs = grid.querySelectorAll('.box');
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${R}, ${G}, ${B})`;
            color.value = `rgb(${R}, ${G}, ${B})`;
        }))     
}

function erase () {
    const boxs = grid.querySelectorAll('.box');
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.background = `white`;
            palete.style
        }))     
}


createDivs(c, r);
Color();

