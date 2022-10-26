function placeHolder(x) {
    console.log("this function does nothing")
}

globalPara = 16



const adjustSize = document.querySelector("#size-btn")

adjustSize.addEventListener("click", popup);



function popup(x) {
    const clearGrid = document.getElementById("gridDisplay");
    while (clearGrid.lastElementChild) {
        clearGrid.removeChild(clearGrid.lastElementChild);
    }
    let para = prompt("Please enter a value", );
    let subPara = parseInt(para)
    globalPara = subPara
    let finalPara = (subPara * subPara)
    dynamicGrid(finalPara)
}

function bgColor(){
    return '#'+(Math.random().toString(16).substr(-6));
}

const gridDisplay = document.querySelector("#gridDisplay")

function dynamicGrid(gridSize) {
    for(let i=0;i<gridSize;i++) {
        const temp = document.createElement("div");
        temp.className = "cubes";
        gridDisplay.append(temp);
        temp.style.backgroundColor = bgColor();
        gridDisplay.style.setProperty('grid-template-columns', `repeat(${Math.sqrt(gridSize)}, 1fr`);
    }
    console.log(globalPara)
}

window.onload = dynamicGrid(256)
