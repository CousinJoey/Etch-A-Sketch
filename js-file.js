tempArr = []
eraserToggle = false
rainbowToggle = false

const drawbtn = document.querySelector("#color-btn")
const adjustSize = document.querySelector("#size-btn")
const eraserbtn = document.querySelector("#eraser-btn")
const clearbtn = document.querySelector("#clear-btn")
const rainbowbtn = document.querySelector("#rainbow-btn")


function gridChange(sliderFinalVal) {
   const clearGrid = document.getElementById("gridDisplay");
        while (clearGrid.lastElementChild) {
        clearGrid.removeChild(clearGrid.lastElementChild);
        } 
    sliderFinalVal = (slider.value * slider.value)
    dynamicGrid(sliderFinalVal)
}


const gridDisplay = document.querySelector("#gridDisplay")

function dynamicGrid(gridSize) {
    for(let i=0;i<gridSize;i++) {
        let temp = document.createElement("div");
        temp.classList.add = ("cubes")
        gridDisplay.append(temp);
        temp.style.backgroundColor = 'white'
        gridDisplay.style.setProperty('grid-template-columns', `repeat(${Math.sqrt(gridSize)}, 1fr`);
        tempArr[i] = temp
}
}

const slider = document.querySelector("input#myRange")

let sliderValue2 = document.querySelector("#sliderValue")
sliderValue2.textContent = (slider.value + " x " + slider.value)

slider.addEventListener("input", gridChange)
slider.addEventListener("input", parameterUpdate)

function parameterUpdate(updateSlider) {
    updateSlider = slider.value + " x " + slider.value
    sliderValue2.textContent = updateSlider
}



function changeColor(e) {
    e.preventDefault();
    const colorPicker = document.querySelector("input#colorpicker")
    const colorValue = colorPicker.value
    this.style.backgroundColor=colorValue

    if (eraserToggle === true) {
        this.style.backgroundColor="white"
    } else if (rainbowToggle === true) {
        this.style.backgroundColor = "#"+(Math.random().toString(16).substr(-6))
    }
}

function startDrawing(e) {
    e.preventDefault();
    tempArr.forEach((div) => div.addEventListener("mousedown", changeColor))
    tempArr.forEach((div) => div.addEventListener("mouseenter", changeColor))
}

function stopDrawing() {
    tempArr.forEach((div) => div.removeEventListener("mouseenter", changeColor))
}

function draw() {
    gridDisplay.addEventListener("mousedown", startDrawing)
    window.addEventListener("mouseup", stopDrawing)
}

clearbtn.addEventListener("click", (e) => tempArr.forEach((div) => div.style.backgroundColor="white"))

drawbtn.addEventListener("click", draw)
drawbtn.addEventListener("click", (e) => eraserToggle = false)
drawbtn.addEventListener("click", (e) => rainbowToggle = false)

eraserbtn.addEventListener("click", draw)
eraserbtn.addEventListener("click", (e) => eraserToggle = true)
eraserbtn.addEventListener("click", (e) => rainbowToggle = false)

rainbowbtn.addEventListener("click", draw)
rainbowbtn.addEventListener("click", (e) => rainbowToggle = true)
rainbowbtn.addEventListener("click", (e) => eraserToggle = false)


window.onload = dynamicGrid(slider.value * slider.value)
