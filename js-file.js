function placeHolder(x) {
    console.log("this function does nothing")
}

globalPara = 0

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


const gridDisplay = document.querySelector("#gridDisplay")

function dynamicGrid(gridSize) {
    for(let i=0;i<gridSize;i++) {
        const temp = document.createElement("div")
        gridDisplay.append(temp);
        temp.textContent = `${i+1}`;
    }
    console.log(globalPara)
}

gridDisplay.style.setProperty('grid-template-columns', 10, 1)
gridDisplay.style.setProperty('grid-template-rows', 10, 1)