//internetten indirdigim ses dosyalarini yeni bir degiskene atayarak kullandim.

const a4=new Audio("sounds/A4.mp3");
const ab4=new Audio("sounds/Ab4.mp3");
const b4=new Audio("sounds/B4.mp3");
const bb4=new Audio("sounds/Bb4.mp3");
const c4=new Audio("sounds/C4.mp3");
const c5=new Audio("sounds/C5.mp3");
const d4=new Audio("sounds/D4.mp3");
const d5=new Audio("sounds/D5.mp3");
const db4=new Audio("sounds/Db4.mp3");
const db5=new Audio("sounds/Db5.mp3");
const e4=new Audio("sounds/E4.mp3");
const e5=new Audio("sounds/E5.mp3");
const eb4=new Audio("sounds/Eb4.mp3");
const eb5=new Audio("sounds/Eb5.mp3");
const f4=new Audio("sounds/F4.mp3");
const g4=new Audio("sounds/G4.mp3");
const gb4=new Audio("sounds/Gb4.mp3");

//clone olusturdum
const playSound = audio => {
    const clone=audio.cloneNode();
    clone.play();
    setTimeout(()=>(clone.volume = 0.8),400);
    setTimeout(()=>(clone.volume = 0.6),800);
    setTimeout(()=>(clone.volume = 0.4),1200);
    setTimeout(()=>(clone.volume = 0.2),1600);
    setTimeout(()=>(clone.volume = 0),2000);
}

const c4Key = document.querySelector(".keyw-1");
const playc4=()=>{
    playSound(c4);
    c4Key.classList.add("active");
    setTimeout(()=>c4Key.classList.remove("active"),200);
};
c4Key.addEventListener("click",playc4);

const Db4Key = document.querySelector(".keyb-1");
const playDb4=()=>{
    playSound(db4);
    Db4Key.classList.add("active");
    setTimeout(()=>Db4Key.classList.remove("active"),200);
};
Db4Key.addEventListener("click",playDb4);

const D4Key = document.querySelector(".keyw-2");
const playD4=()=>{
    playSound(d4);
    D4Key.classList.add("active");
    setTimeout(()=>D4Key.classList.remove("active"),200);
};
D4Key.addEventListener("click",playD4);

const Eb4Key = document.querySelector(".keyb-2");
const playEb4=()=>{
    playSound(eb4);
    Eb4Key.classList.add("active");
    setTimeout(()=>Eb4Key.classList.remove("active"),200);
};
Eb4Key.addEventListener("click",playEb4);


// E4
const e4Key = document.querySelector(".keyw-3");
const playe4 = () => {
  playSound(e4);
  e4Key.classList.add("active");
  setTimeout(() => e4Key.classList.remove("active"), 200);
};
e4Key.addEventListener("click", playe4);

// F4
const f4Key = document.querySelector(".keyw-4");
const playF4 = () => {
  playSound(f4);
  f4Key.classList.add("active");
  setTimeout(() => f4Key.classList.remove("active"), 200);
};
f4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".keyb-3");
const playGb4 = () => {
  playSound(gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".keyw-5");
const playG4 = () => {
  playSound(g4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".keyb-4");
const playAb4 = () => {
  playSound(ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".keyw-6");
const playA4 = () => {
  playSound(a4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".keyb-5");
const playBb4 = () => {
  playSound(bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".keyw-7");
const playB4 = () => {
  playSound(b4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".keyw-8");
const playC5 = () => {
  playSound(c5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".keyb-6");
const playDb5 = () => {
  playSound(db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".keyw-9");
const playD5 = () => {
  playSound(d5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".keyb-7");
const playEb5 = () => {
  playSound(eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".keyw-10");
const playE5 = () => {
  playSound(e5);
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);



window.addEventListener("keydown",({keyCode})=>{
    //q
    if(keyCode===81)return playc4();
    //2
    if(keyCode===50)return playDb4();
    //w
    if(keyCode===87)return playD4();
    //3
    if(keyCode===51)return playEb4();
    //e
    if(keyCode===69)return playe4();
    //r
    if(keyCode===82)return playF4();
    //5
    if(keyCode===53)return playGb4();
    //t
    if(keyCode===84)return playG4();
    //6
    if(keyCode===54)return playAb4();
    //y
    if(keyCode===89)return playA4();
    //7
    if(keyCode===55)return playBb4();
    //u
    if(keyCode===85)return playB4();
    //ı
    if(keyCode===73)return playC5();
    //9
    if(keyCode===57)return playDb5();
    //o
    if(keyCode===79)return playD5();
    //0
    if(keyCode===48)return playEb5();
    //p
    if(keyCode===80)return playE5();

});