var karakter=document.getElementById("karakter");
var oyunalani=document.getElementById("game");
const popup=document.getElementById('pop-up');
const message=document.getElementById('success-message');
const tekrar = document.getElementById('retry');
var interval;
var both=0;
var counter=0;
var currentBlocks=[];
let isover=1;
//topun saga dogru hareketi
function moveLeft()
{
    var left=parseInt(window.getComputedStyle(karakter).getPropertyValue("left"));
    if(left>0)
    {
    karakter.style.left=left-2+"px";
    }
}
//topun sola dogru hareketi
function moveRight()
{
    var left=parseInt(window.getComputedStyle(karakter).getPropertyValue("left"));
    //referans noktasını sola gore aldım.
    //cerceve boyu hesaplandi
    if(left<380)
    {
        karakter.style.left=left+2+"px";
    }
   

}

//tus kontrolu saglandi
document.addEventListener("keydown",event=>{
    if(both==0)
    {
        both=both+1;
        if(event.key==="ArrowLeft")
        {
            interval=setInterval(moveLeft,1);
        }
        if(event.key==="ArrowRight")
        {
            interval=setInterval(moveRight,1);
        }
    }
    
});

document.addEventListener("keyup",event=>{
    clearInterval(interval);
    both=0;
});

var blocks=setInterval(function(){
    var blockLast=document.getElementById("block"+(counter-1));
    var holeLast=document.getElementById("hole"+(counter-1));
   if(counter>0)
   {
    var blockLastTop=parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
    var holeLastTop=parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
   }
    //engelleri ekrana sigdirdim.
   if(blockLastTop<400 || counter==0)
   {
    //oyundaki cubuklari ve cubuklarin arasindaki boslugu olusturdum.
var block=document.createElement("div");
var hole=document.createElement("div");
block.setAttribute("class","block");
hole.setAttribute("class","hole");
block.setAttribute("id","block"+counter);
hole.setAttribute("id","hole"+counter);
block.style.top=blockLastTop+100+"px";
hole.style.top=holeLastTop+100+"px";
//random bir sayi olusacak bu sayi ise soldan referans alarak deligin rastgele olusmasini saglayacak.
var random=Math.floor(Math.random()*360);
hole.style.left=random + "px";

oyunalani.appendChild(block);
oyunalani.appendChild(hole);
currentBlocks.push(counter);
counter=counter+1;
   }
   var characterTop=parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));;
   var characterLeft=parseInt(window.getComputedStyle(karakter).getPropertyValue("left"));
   var drop=0;
   if(characterTop<=0)
   {
    skor();
   }
   for(var i=0;i<currentBlocks.length;i++)
   {
    let current=currentBlocks[i];
    let iblock=document.getElementById("block"+current);
    let ihole=document.getElementById("hole"+current);
    let iblockTop=parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
    let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
    iblock.style.top=iblockTop-0.5+"px";
    ihole.style.top=iblockTop-0.5+"px";
    if(iblockTop<-20)
    {
        currentBlocks.shift();
        iblock.remove();
        ihole.remove();
    }
    if(iblockTop-20<characterTop && iblockTop>characterTop)
    {
        drop=drop+1;
        if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft)
        {
            drop=0;
        }
    }
   
}
if(drop==0)
{
    if(characterTop<480)
    {
        karakter.style.top=characterTop+2+"px";
    }
  
}
else{
    karakter.style.top=characterTop-0.5+"px";
}


},1);



function skor()
{
    popup.style.display='flex';
    
    message.innerText="Kaybettiniz! "+"Skorunuz: "+counter;
    oyunalani.style.visibility="hidden";
    clearInterval(blocks);
  
    isover=0;
    tetikleme();
   
}
function tetikleme()
{
    window.addEventListener('keydown',function(d)
    {
        if(d.keyCode==13)
        {
            window.location.reload();
        }
    
    });

}

tekrar.addEventListener('click',function()
{
   window.location.reload();
});

