const board=document.querySelector(".board") 
const raket=document.querySelector(".racket")
const next=document.querySelector(".next p")
const Score=document.querySelector(".score p")

//rastgele gelecek olan renkleri dizi icerisine aldim.
let colorArray=["yellow","green","red","blue","purple","pink"]

//raket tasmasini belirleyecek.
let boardbount=board.getBoundingClientRect()
let squarevelocity
let score
let choosecolor
let notstarted=false

//renk karelerini olusturup oyun icerisine dahil edecek.
let drawsquare=()=>{
    setInterval(()=>{
        let square=document.createElement("div");
        //css icerisndeki kismi yazdim
        square.classList.add("square");
        //ekranin genisligi kadar random deger tanimlayip konumlandiracak.
        let x=Math.floor(Math.random()*board.clientWidth);
        square.style.top="-20px";
        square.style.left=x+"px";
        square.style.right=x+20+"px";
        square.style.background=chooserandomcolor();
        board.appendChild(square);
        //600 ms'de bir kare yaratip oyuna dahil edecek.
    },600);
};
//rastgele bir sekilde ana kutunun üzerinde renkli kareler olusturacak. 
let chooserandomcolor=()=>{
    //renk secici
    let index=Math.floor(Math.random()*colorArray.length);
    return colorArray[index];
};

let squaremove=()=>{
    let squares=document.querySelectorAll(".square")
    for(let i=0;i<squares.length;i++)
    {
        let rakets=raket.getBoundingClientRect()
        let presentsquare=squares[i].getBoundingClientRect()
        //gelen karenin arkaplani kontrol edilerek degiskene atandi.
        let squarecolor=squares[i].style.background
        squares[i].style.top=parseInt(squares[i].style.top)+1+squarevelocity+"px";
        //kare ile raketimizin degme olayini kontrol ettim.
        if(presentsquare.bottom>rakets.top && presentsquare.left>rakets.left && presentsquare.right<rakets.right)
        {
            //kare ile raket eslestiginde renk kontrolu yaptim.
            if(squarecolor==choosecolor)
            {
                //skoru 5 puan arttirdim.
                score=score+5;
                //ekrana yazdirdim.
                Score.textContent=score;
                //yakalanilan kare agirlik yapmamasi icin siliniyor.
                board.removeChild(squares[i]);
                nextcolor();
            }
            else
            {
                window.location.reload()
            }
           
        }
        if(presentsquare.bottom>boardbount.bottom)
        {
            board.removeChild(squares[i]);
        }
    }
    requestAnimationFrame(squaremove);
};

let nextcolor=()=>{
    let index=Math.floor(Math.random()*colorArray.length);
    next.style.background=colorArray[index];
    choosecolor=colorArray[index];
};

let initial=()=>{
    let squares=document.querySelectorAll(".square");
    squares.forEach((item)=>{
        item.remove();
    });
    squarevelocity=0.2;
    score=0;
    Score.textContent=score;
    if(!notstarted)
    {
        drawsquare()
        nextcolor()
        squaremove()
        notstarted=true;
    }
};

//raket hareketlenmesi
window.addEventListener("mousemove",(e)=>{
    raket.style.left=e.x+"px";
});
initial();