console.log('Hello World');

let scuareQuantity = 10;
drawSquares(scuareQuantity);

let densityButton = document.querySelector('#setDensity');
densityButton.addEventListener('click',setDensity);
selectSquares();

let eraseButton = document.querySelector('#eraseBoard');
eraseButton.addEventListener('click',eraseBoard);

function selectSquares(){
    let drawingSquares = document.querySelectorAll('#square');
    drawingSquares.forEach(square => square.addEventListener('mouseover',colorChange));
}

function drawSquares (scuareQuantity){

    
    let dimention = 600/scuareQuantity;
    scuareQuantity *= scuareQuantity;
    const board = document.querySelector('#drawingBoard');

    for ( let i= 0; i < scuareQuantity; i++){
        
        const div = document.createElement('div');

        div.style.cssText = 
        `width: ${dimention}px; 
        height: ${dimention}px;
        border: 1px solid rgb(230, 230, 230);
        box-sizing: border-box;
        border-radius: 2px`;

        div.setAttribute('id','square');
        div.classList.add('squareClean');

        board.appendChild(div);
    }
}

function setDensity(){
    console.log('Changed density');
    let density = prompt('Number per side?:')
    
    density = Math.floor(density);
    console.log(`New density: ${density}x${density}`);

    const densityTexts = document.querySelectorAll('#densityText');
    densityTexts.forEach(densityText => densityText.textContent = `${density}`);

    if (density <= 100){
        const squares = document.querySelectorAll('#square');
        squares.forEach(square => square.remove());
        drawSquares(density);
    } else {
        alert('Sorry, choose a number less or igual to 100')
    }

    selectSquares();
}

function colorChange(event){
    console.log(event.target);
    
    if (event.target.classList[0] == 'squareClean') {
        event.target.classList.remove('squareClean');
        event.target.classList.add('squarePainted');
    } else {
        /*Do nothing*/
    }
}

function eraseBoard (){
    let drawingSquares = document.querySelectorAll('#square');
    drawingSquares.forEach((square) => {

        if (square.classList[0] == 'squareClean') {
            /*Do nothing*/
        } else {
            square.classList.remove('squarePainted');
            square.classList.add('squareClean');
        }
    });
}