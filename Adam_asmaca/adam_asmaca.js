const word=document.getElementById('kelime')
const popup=document.getElementById('pop-up')
const message=document.getElementById('success-message')
const yanlis = document.getElementById('yanlis')
const insan = document.querySelectorAll('.iskelet')
const mesaj = document.getElementById('message')
const tekrar = document.getElementById('retry')
let score = document.getElementById('skor')
let skor=0;
let isover=1;
const dogruHarfler=[];
const yanlisHarfler=[];
 //uretilen kelimeyi degiskene atadim.
let selectedWord=getRandomWord();
//rastgele kelime getirme
function getRandomWord()
{
    //dizi
    const kelimeler=["javascript","java","python","Programlama","Css","Html","Go"]

    //kelimenin uzunlugu kadar rastgele kelime getirecek.ondalikli oldugu icin math floor ile yuvarliyorum.
    return kelimeler[Math.floor(Math.random()*kelimeler.length)].toLowerCase();
}

//ekrana yansitma
function displayWord()
{
    //her kelimeyi div icerisine almam gerekiyor.
     //her kelime diziye cevriliyor.
    //map ile isleyip listeye cevirdim.
    word.innerHTML=`
   
    ${selectedWord.split('').map(letter=>`
    <div class="letter">
    ${dogruHarfler.includes(letter) ? letter:''}
    </div>
    `).join('')}`;
    const k=word.innerText.replace(/\n/g,'');

if(k===selectedWord)
{
    popup.style.display='flex';
    message.innerText="Tebrikler Kazandınız! "+"Skorunuz: "+skor;
    isover=0;
    tetikleme()
}
}

//hatali listeyi guncelleme
function hataListesiGuncelle()
{
    //diziyi kontrol ettim. dolu ise ekrana yazilacak.
    //map yeni bir dizi dondurur.
    //map ile yeni bir dizi olustu ve bunu ekrana yazdirdim.
    yanlis.innerHTML = `
    ${yanlisHarfler.length>0 ?'<h3>Yanlış Girilen Harfler </h3>':''}
    ${yanlisHarfler.map(letter=> `<span>${letter}</span>`)}`;

    //hata yapildikca insan vucudunun ortaya cikmasi.
    insan.forEach((item,index) => 
    {
        //Yanlis girilen harf sayisi
        const hataSayisi=yanlisHarfler.length;
        if(index<hataSayisi)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
        
    });

    //Kaybetme durumu
    /*eger dizi icindeki harfler html kismindaki
    class adi iskelet olan parcalarin sayisindan buyukse oyun biter*/ 
    if(yanlisHarfler.length === insan.length)
    {
        popup.style.display='flex';
        message.innerText="Kaybettiniz! "+"Skorunuz: "+skor;
        isover=0
        tetikleme()
    }
}

function displayMessage()
{
    //message_show isminde class olustu.
    mesaj.classList.add('message_show');
    //3 saniye icerisinde mesaj kutusu kaybolacak.
    setTimeout(function()
    {
        mesaj.classList.remove('message_show');

    },3000)

}

//sayfa yenileme
tekrar.addEventListener('click',function()
{
   dogruHarfler.splice(0);
   yanlisHarfler.splice(0); 
   skor=0
   score.innerHTML="0"
   selectedWord=getRandomWord();
   displayWord();
   hataListesiGuncelle();
   popup.style.display='none';
   isover=1;
});


window.addEventListener('keydown',function(e)
{
    //sadece harfleri alacak. control gibi kisimlar alinmayacak.
    //https://www.toptal.com/developers/keycode adresinden keyler kontrol edildi.
    
    if(e.keyCode >=65)
    {
        //kullanici eger buyuk harf girerse hata almamasi icin toLowerCase kullandim.
        const letter = e.key.toLowerCase();
        //amac uretilen kelimenin icinde klavyeden alinan harf kontrolu
      if(isover)
      {
        if(selectedWord.includes(letter))
        {
            //Harf var mi yok mu? harf dogru kelime listesinde yoksa ekleme yapilacak.
            if(!dogruHarfler.includes(letter))
            {
                dogruHarfler.push(letter);
                skor=skor+5
                countScore()
                displayWord();

            }
            else
            {
                displayMessage();
            }
        }
        //kelimenin iceriginde yoksa
        else
        {
            if(!yanlisHarfler.includes(letter))
            {
                yanlisHarfler.push(letter);
                skor=skor-5
                countScore()
                hataListesiGuncelle();
            }
            else
            {
                displayMessage();
            }

        }
      }
    }
   
});
displayWord();
function tetikleme()
{
    window.addEventListener('keydown',function(d)
    {
        if(d.keyCode==13)
        {
            window.location.reload()
        }
    
    });

}

//skor olusturma
function countScore()
{
    score.innerText="Skorunuz: "+skor
}

