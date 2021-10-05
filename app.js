const grid = document.getElementById('sketchGrid');
const btnBlack = document.getElementById('black');

function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); ++i){
        const div = document.createElement('div');
        div.style.border = '1px solid red';
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
        grid.appendChild(div).classList.add('box');
    }
}

createDivs(16, 16);


function blackColor(){

    const boxs = grid.querySelectorAll('.box');
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            let Rnum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`
        }))
}

blackColor();