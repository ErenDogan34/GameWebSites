const canvas=document.getElementById("canvas");
const body = document.querySelector("body");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var Color = '';
var lineW = 5;
let prevX = null;
let prevY = null;
let draw = false;

body.style.backgroundColor="#FFFFFF";
var Input = document.getElementById("favcolor");

//Arka plani renk secici ile degistirme.
Input.addEventListener("input",function(){
    Color = Input.value;
    body.style.backgroundColor = Color;
},false);

const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;



let colors = document.querySelectorAll(".color");
colors = Array.from(colors);
colors.forEach(color=>{
    color.addEventListener("click", ()=>{
        ctx.strokeStyle = color.dataset.color;
    })
})

let clearButton = document.querySelector(".temizle");
clearButton.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
});

let SaveButton = document.querySelector(".kaydet");
SaveButton.addEventListener("click",()=>{
    let data = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
})

window.addEventListener("mousedown",(e)=>draw = true);
window.addEventListener("mouseup", (e)=>draw=false );

window.addEventListener("mousemove", (e)=>{
    if(prevX==null || prevY==null || !draw){
        prevX=e.clientX;
        prevY=e.clientY;
        return
    }
    let currentX = e.clientX;
    let currentY = e.clientY;

    ctx.beginPath();
    ctx.moveTo(prevX,prevY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;

})