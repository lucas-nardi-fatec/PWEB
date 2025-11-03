var initialState = true;
var hoveredUp = false;
var broken = false;


let windowImage = document.getElementById("imgWindow");
let windowMessage = document.getElementById("textWindow");

windowImage.addEventListener("mouseover", function () {hoveredUp = true; initialState = false; update();});
windowImage.addEventListener("mouseleave", function () {hoveredUp = false; update();}); 


function update(){
    if(broken){
        windowImage.src="./Images/brokenWindow.jpg";
        windowMessage.innerHTML="JANELA QUEBRADA";
    } else if(hoveredUp){

        windowImage.addEventListener("click", function(){broken = true; update();});
        initialState = false;

        windowImage.src="./Images/openWindow.jpg";
        windowMessage.innerHTML="JANELA ABERTA";
    } else if(initialState == false){
        windowImage.src="./Images/closedWindow.jpg";
        windowMessage.innerHTML="JANELA FECHADA";
    }
}