let container = document.querySelector("#container")
let newCanvasButton = document.querySelector("#newCanvas")

newCanvasButton.addEventListener("click", (e)=>{
    let newDimensions = prompt("enter new dimensions separated with an x:")
    newDimensions = newDimensions.split("x");
    container.innerHTML = "";
    buildCanvas(newDimensions[0], newDimensions[1]);
})

function addListeners(){
    let allPixels = document.querySelectorAll(".pixel");

    Array.from(allPixels).forEach(e=>{
    e.addEventListener("mouseover", x=>{
        x.target.style.backgroundColor = "red";
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
            newLine.appendChild(newDiv)
        }
        container.appendChild(newLine)
        
    }
    addListeners();
}



buildCanvas(16,16)