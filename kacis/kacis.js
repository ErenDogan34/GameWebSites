function sol()
{
    let left=parseInt(window.getComputedStyle(karakter).getPropertyValue("left"));
    left-=100;
    //cerceveye sigdirdim.
    if(left>=0)
    {
        karakter.style.left=left+"px";
    }
    
}
function sag()
{
    let left=parseInt(window.getComputedStyle(karakter).getPropertyValue("left"));
    left+=100;
    //cerceveye sigdirdim.
    if(left<300)
    {
        karakter.style.left=left+"px";
    }
   
}

document.addEventListener("keydown",event=>{
    if(event.key==="ArrowLeft"){sol();}
    if(event.key==="ArrowRight"){sag();}
});

var block =document.getElementById("block");
var sayici=0;
//random olarak engel cikiyor.
block.addEventListener('animationiteration',()=>{
    var random=Math.floor(Math.random()*3);
    left=random*100;
    block.style.left=left+"px";
    sayici=sayici+1;
});

//blokla karakter arasindaki carpismalar alindi.
setInterval(function(){
    let karaktersol=parseInt(window.getComputedStyle(karakter).getPropertyValue("left"));
    let blocksol=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockyukari=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(karaktersol==blocksol &&blockyukari<500 && blockyukari>300)
    {
        //Skora gore bitis yazisi cikardim.
        if(sayici>20)
        {
            alert("Oyun bitti.Skorun: "+sayici+"Harika skor!!!");
        }
       
        else
        {
            alert("Oyun bitti.Skorun: "+sayici)
        }
        
        sayici=0;
        

    }
},1);

