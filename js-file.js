globalPara = 16
tempArr = []
eraserToggle = false

const drawbtn = document.querySelector("#color-btn")
const adjustSize = document.querySelector("#size-btn")
const eraserbtn = document.querySelector("#eraser-btn")
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
        let temp = document.createElement("div");
        temp.classList.add = ("cubes")
        gridDisplay.append(temp);
        temp.style.backgroundColor = bgColor();
        gridDisplay.style.setProperty('grid-template-columns', `repeat(${Math.sqrt(gridSize)}, 1fr`);
        tempArr[i] = temp
}
}


function changeColor(e) {
    e.preventDefault();
    this.style.backgroundColor="black"

    if (eraserToggle === true) {
        this.style.backgroundColor="white"
    }
}

function startDrawing(e) {
    e.preventDefault();
    tempArr.forEach((div) => div.addEventListener("mousedown", changeColor))
    tempArr.forEach((div) => div.addEventListener("mouseenter", changeColor))
}

function stopDrawing() {
    console.log("stopped drawing")
    tempArr.forEach((div) => div.removeEventListener("mouseenter", changeColor))
}

function draw() {
    gridDisplay.addEventListener("mousedown", startDrawing)
    window.addEventListener("mouseup", stopDrawing)
}


drawbtn.addEventListener("click", draw)
drawbtn.addEventListener("click", (e) => eraserToggle = false)
eraserbtn.addEventListener("click", (e) => eraserToggle = true)


window.onload = dynamicGrid(256)
