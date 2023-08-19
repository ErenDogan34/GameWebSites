//yukaridan asagiya kirmizi renkli sutun olusturdum.
for(var i=25;i>0;i--)
{
    //sutunun tamami
    var slider=document.createElement("div");
    //slider icindeki animate
    slider.setAttribute("class","slider animate");
    //css kisminda ayarladigim hareket eden sutunu parcaladim.
    slider.setAttribute("id","slider"+i);
    document.getElementById("oyun").append(slider);
}
var slidewidth=400;
function durdurmaButonu(slider)
{
    var sliderCurrent= document.getElementById("slider"+slider);
    var sliderAbove=document.getElementById("slider"+(slider+1));
    if(slider==1)
    {
        var sliderBelow=sliderCurrent;
    }
    else
    {
        var sliderBelow=document.getElementById("slider"+(slider-1));
    }
    
    var left =window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left=left;
    var width=parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
    var leftBelow=parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
    left=parseInt(left);
    var difference=left-leftBelow;
    var absDifference=Math.abs(difference);

    //bu blogu eklemeseydim ekle butonuna bastigimda herhangi bir yerde de olsak ekleme yapiyor.
    if(difference>width ||difference<-width)
    {
        let characterScore= "Skorunuz: ".concat(slider-1);
        alert("Oyun bitti!"+characterScore);
        window.location.reload();

   
    }
    if(difference>0)
    {
        left=left+absDifference;
    }
    else
    {
        left=left-difference;
        sliderCurrent.style.left=left.toString().concat("px");
    }
    var offset= (width-absDifference).toString().concat("px");
    sliderCurrent.style.width=offset;
    sliderAbove.style.width=offset;

    sliderAbove.style.visibility="visible";
    slidewidth=slidewidth+absDifference;
   
    var onclick="durdurmaButonu("+(slider+1)+")";
    document.getElementById("button").setAttribute("onclick",onclick);
    
}



