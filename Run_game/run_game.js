var character=document.getElementById("character");
idleImageNumber=1;
idleAnimationNumber=0;

//karakter hareketi

function idleAnimation()
{
    idleImageNumber=idleImageNumber+1;

    if(idleImageNumber==11)
    {
        idleImageNumber=1;
    }


    character.src="idle (" + idleImageNumber + ").png";

}

function idleAnimationStart()
{
    //setInterval belirli bir islemi zaman araliklari ile tekrar eden fonksiyondur.
    idleAnimationNumber = setInterval(idleAnimation,200)

}



//Karakter kosma hareketi
runImageNumber=1;
runAnimationNumber=0;

function runAnimation()
{
    runImageNumber=runImageNumber+1;
    //resimleri kontrol edecek en son resim 10 oldugundan 11 oldugunda basa donmesi saglanacak.
    if(runImageNumber==11)
    {
        runImageNumber=1;
    }
    character.src="run (" + runImageNumber + ").png";

}

function runAnimationStart()
{
    //setInterval iki parametre alir
    runAnimationNumber=setInterval(runAnimation,100);
    //karakter kosuya basladiginda duragan hareketini kesmeli
    clearInterval(idleAnimationNumber);
}
jumpImageNumber=1;
jumpAnimationNumber=0;
characterMarginTop=397;
function jumpAnimation()
{
    jumpImageNumber=jumpImageNumber+1;

    //resimlerde 6'dan kucuk ve esit geldiginde margin ile oynayip asagida kalmasi saglandi. 
    if(jumpImageNumber<=6)
    {
        characterMarginTop=characterMarginTop-35;
        character.style.marginTop=characterMarginTop + "px";
    }
    //resimlerde 7'den buyuk ve esit geldiginde margin ile oynayip yukarida kalmasi saglandi.
    //iki durumda da amac karakterin ziplamasindan sonra belirli bir yukseklige cikip inmesi. 
    if(jumpImageNumber>=7)
    {
        characterMarginTop=characterMarginTop+35;
        character.style.marginTop = characterMarginTop + "px";
    }



    if(jumpImageNumber==11)
    {
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber=0;
        runAnimationStart();
    }
    character.src="jump (" + jumpImageNumber + ").png";

}

function jumpAnimationStart()
{
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber=setInterval(jumpAnimation,100);

}



function keyCheck(event)
{
    //enter tusunun key numarasini ogrenmek icin yapildi.
    //alert(event.which);
    
    var keyCode=event.which;
    if(keyCode==13){
        if(runAnimationNumber==0)
        {
            runAnimationStart();
        }

         //arkaplan hareketlenmesi
    if(moveBackgroundAnimationId==0)
    {
        moveBackgroundAnimationId = setInterval(moveBackground,100);
    }
    if(boxAnimationId==0)
    {
        boxAnimationId=setInterval(boxAnimation,100);
    }
    }

    if(keyCode==32)
    {
        if(jumpAnimationNumber==0)
        {
            jumpAnimationStart();
        }
        if(moveBackgroundAnimationId==0)
        {
        moveBackgroundAnimationId = setInterval(moveBackground,100);
        }

        if(boxAnimationId==0)
        {
        boxAnimationId=setInterval(boxAnimation,100);
        }
   
    }
   
}

//arkaplan resminin kosarken hareketlenmesi 

var backgroundImagePositionX=0;
var moveBackgroundAnimationId=0;

var score=0;
function moveBackground()
{
    //seviye zorlastirma
    if(score>100)
    {
        backgroundImagePositionX=backgroundImagePositionX-2;
    }

    //20 arka plan deigisim hizi olarak ayarlandi
    backgroundImagePositionX=backgroundImagePositionX-15;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
    score=score+1;
    document.getElementById("score").innerHTML=score;

}

boxMarginLeft=1540;
function createBoxes()
{
    for(var i=0;i<=10;i++)
    {
    var box= document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);

    box.style.marginLeft=boxMarginLeft+"px";
    box.id="box"+i;


    if(i<5)
    {
        boxMarginLeft=boxMarginLeft+2000;
    }
    if(i>=5)
    {
        boxMarginLeft=boxMarginLeft+1000;
    }
    }
}

var boxAnimationId=0;

function boxAnimation()
{
    for(var i=0;i<10;i++)
    {
        var box=document.getElementById("box"+i);
        var currentMarginLeft=getComputedStyle(box).marginLeft;
        var newMarginLeft=parseInt(currentMarginLeft)-35;
        box.style.marginLeft=newMarginLeft+"px";
        if(newMarginLeft>=-110 & newMarginLeft<=100)
        {
            if(characterMarginTop > 350)
            {
                clearInterval(boxAnimationId);
                clearInterval(runAnimationNumber)
                runAnimationNumber=-1;
                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber=-1;
                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId=-1;

                deadAnimationNumber=setInterval(characterDeadAnimation,100);
                
            }
        }
    }

    
}
deadImageNumber=1;
deadAnimationNumber=0;
function characterDeadAnimation()
{
    deadImageNumber=deadImageNumber+1;
    if(deadImageNumber==11)
    {
        deadImageNumber=10;

        document.getElementById("finish").style.visibility="visible";
        document.getElementById("score2").innerHTML=score;
    }
    character.src="dead (" + deadImageNumber + ").png";
}

function yenile()
{
    location.reload();
}