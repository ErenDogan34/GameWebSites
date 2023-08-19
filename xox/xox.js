const blocks =document.querySelectorAll(".block");
const playertext=document.getElementById("player");
const errorText=document.getElementById("error");
const Retrybtn=document.getElementById("retry");
let player = "X"
let oyunbitti=false;
let kazanan;

function startGame()
{
    playertext.textContent=`${player} oyuncusunu sırası`
    blocks.forEach(block=> block.addEventListener("click",()=>chooseArea(block)))
}

function chooseArea(block)
{
    //hata kontrolu yaptim. ayni hucreye basilmasi onlendi
    if(block.textContent==="")
    {
         //x isareti koyar
    block.textContent=player;
    //sadece bos oldugunda hamle yapilmasini sagladim.
    turnPlayer();
    }
   else
   {
    errorText.textContent="Burası dolu"
    block.style.border="2px solid red"
    //verilen hata 4.5 saniye sonra eski haline gelecek
    setTimeout(()=>{
        errorText.textContent=""
        block.style.border="1px solid black"

    },4500)
   }
    //oyuncu degistirecek fonksiyon
   
    checkWin();
    BeraberlikKontrol();

    if(oyunbitti)
    {
        playertext.textContent=`Oyun bitti, ${kazanan} kazandı`
        //oyun bittikten sonra isaretleme yapilmasini onledim.
        blocks.forEach(block=>block.style.pointerEvents='none');
        Retrybtn.style.visibility="visible"
        
    }

}
function turnPlayer()
{
    if(player==="X")
    {
        player="O";
        playertext.textContent=`${player} oyuncusunun sırası`
        return;
    }

    else if(player==="O")
    {
        player="X";
        playertext.textContent=`${player} oyuncusunun sırası`
        return;
    }

}

function checkWin()
{
    checkRows()
    checkColumns()
    checkDiagonals()

}
function BeraberlikKontrol()
{
    const values=[];
    blocks.forEach(block=>values.push(block.textContent))
    if(!values.includes("")){
        playertext.textContent="Beraberlik var !";
        blocks.forEach(block=> block.style.pointerEvents='none');
        Retrybtn.style.visibility="visible"
    }


}
//yanyana uc ayni desen olusursa kazanilacak
function checkRows()
{
    let row1=blocks[0].textContent==blocks[1].textContent && blocks[0].textContent==blocks[2].textContent && blocks[0].textContent!=""
    let row2=blocks[3].textContent==blocks[4].textContent && blocks[3].textContent==blocks[5].textContent && blocks[3].textContent!=""
    let row3=blocks[6].textContent==blocks[7].textContent && blocks[6].textContent==blocks[8].textContent && blocks[6].textContent!=""

    if(row1 || row2 || row3)
    {
        oyunbitti=true
    }
    if(row1) return kazanan = blocks[0].textContent
    if(row2) return kazanan = blocks[3].textContent
    if(row3) return kazanan = blocks[6].textContent
}
//yukaridan asagiya ayni ise kazanma durumu
function checkColumns()
{
    let col1=blocks[0].textContent==blocks[3].textContent && blocks[0].textContent==blocks[6].textContent && blocks[0].textContent!=""
    let col2=blocks[1].textContent==blocks[4].textContent && blocks[1].textContent==blocks[7].textContent && blocks[1].textContent!=""
    let col3=blocks[2].textContent==blocks[5].textContent && blocks[2].textContent==blocks[8].textContent && blocks[2].textContent!=""

    if(col1 || col2 || col3)
    {
        oyunbitti=true
    }
    if(col1) return kazanan = blocks[0].textContent
    if(col2) return kazanan = blocks[1].textContent
    if(col3) return kazanan = blocks[2].textContent
}
//caprazli kazanan kontrol edecek.
function checkDiagonals()
{
    let dia1=blocks[0].textContent==blocks[4].textContent && blocks[0].textContent==blocks[8].textContent && blocks[0].textContent!=""
    let dia2=blocks[2].textContent==blocks[4].textContent && blocks[2].textContent==blocks[6].textContent && blocks[2].textContent!=""
   
    if(dia1 || dia2)
    {
        oyunbitti=true
    }
    if(dia1) return kazanan = blocks[0].textContent
    if(dia2) return kazanan = blocks[2].textContent
    
}
startGame();