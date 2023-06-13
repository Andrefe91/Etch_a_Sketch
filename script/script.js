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
        border-radius: 2px;
        background-color: rgb(255,255,255)`;

        div.setAttribute('id','square');
        div.setAttribute('data-whitelevel',255);
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

    let divColor = event.target.style.backgroundColor;
    let whiteLevel = event.target.getAttribute('data-whitelevel');

    //Because 255 it's not a round number to divide by 10, we must ensure that not weird things happens

    if (whiteLevel == 255){
        whiteLevel -= 30;
    } else if (whiteLevel <= 0){
        /*do nothing*/
    } else {
        whiteLevel -= 15
    }

    /*We must modify the data attribute to the div for the next iteration*/
    event.target.setAttribute('data-whitelevel',whiteLevel);

    /*We can change only the style of the div/object just selecting and assigning the value to the property*/
    //With this, we can color the div
    event.target.style.backgroundColor = `rgb(${whiteLevel},${whiteLevel},${whiteLevel})`;
    
}

function eraseBoard (){
    let drawingSquares = document.querySelectorAll('#square');
    drawingSquares.forEach((square) => {

        square.style.backgroundColor = 'rgb(255,255,255)';

    });
}