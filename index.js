let container = document.querySelector("#container")
let newCanvasButton = document.querySelector("#newCanvas")

newCanvasButton.addEventListener("click", (e)=>{
    let newDimensions = prompt("enter new dimensions separated with an x: (max 200x200)")
    newDimensions = newDimensions.split("x");
    container.innerHTML = "";
    if(newDimensions[0] > 200 || newDimensions[1]> 200){
        alert("Values > 200, building 16x16.")
        buildCanvas(16,16);
        return;
    }
    buildCanvas(newDimensions[0], newDimensions[1]);
})

document.querySelector("#reset").addEventListener("click", ()=>{
    Array.from(document.querySelectorAll(".pixel")).forEach(x=>{
        x.style.backgroundColor = "#BBB"
        x.style.opacity = 1;
    })
})

function getRandomNumberColor(){
    return Math.floor(Math.random()*255);
}

function addListeners(){
    let allPixels = document.querySelectorAll(".pixel");

    Array.from(allPixels).forEach(e=>{
    e.addEventListener("mouseover", x=>{
        if(document.querySelector("#randomColors").checked){
            x.target.style.backgroundColor = `rgb(${getRandomNumberColor()}, ${getRandomNumberColor()}, ${getRandomNumberColor()})`;
        } else {
            x.target.style.backgroundColor = `red`;

        }

        if(document.querySelector("#reduceOpacity").checked){
            x.target.style.opacity = String(Number(x.target.style.opacity)-0.1);
        }
    })
    })
}

function buildCanvas(width, height){
    for(let i=0; i<height; i++){
        let newLine = document.createElement("div");
        newLine.classList.add("line");
        
        for(let j=0; j<width; j++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("pixel")
            newDiv.style.opacity = 1;
            newLine.appendChild(newDiv)
        }
        container.appendChild(newLine)
        
    }
    addListeners();
}



buildCanvas(16,16)