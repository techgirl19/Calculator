const container = document.querySelector(".container");
const resizebutton = document.getElementById("resize");
function Creategrid(size){
container.innerHTML="";
const sizeofsquare= 960 / size;
for (let i=0; i< size*size ;i++){
const squarediv = document.createElement("div");
squarediv.classList.add("square");
squarediv.style.height = `${sizeofsquare}px`;
squarediv.style.width =`${sizeofsquare}px`;
container.appendChild(squarediv);
squarediv.addEventListener("mouseover", (Event) => {
    squarediv.style.backgroundColor = "white";
})
}
}
function resizeGrid(){
    let newsize =parseInt(prompt("Enter grid size (1-100) :"));
    if(newsize >0 && newsize <=100){
        Creategrid(newsize);
    }
    else{
        alert("please enter number between 1 - 100 only");
    }
}

Creategrid(16);

resizebutton.addEventListener("click", resizeGrid);



//for 16*16 grid
/*const container = document.querySelector("#gridcontainer");
//to create 16*16, 256 divs dynamically using the js
for (let i = 0; i < 256; i++) {
    const squarediv = document.createElement("div");
    squarediv.classList.add("square");
    container.appendChild(squarediv);
    squarediv.addEventListener("mouseover", (Event) => {
        squarediv.style.backgroundColor = "black";
    })
    /*squarediv.addEventListener("mouseout", (Event) => {
        squarediv.style.backgroundColor = "blueviolet";
    })*/
