/* ======================
   DARK MODE
====================== */

const theme=document.getElementById("themeBtn");

theme.onclick=()=>{

document.body.classList.toggle("light");

theme.textContent=document.body.classList.contains("light")
?"☀️":"🌙";

};

/* ======================
   TYPING EFFECT
====================== */

const words = [
  "Software Developer",
  "Full-Stack Developer",
  "Python Developer",
  "Automation Developer",
  "Cybersecurity Enthusiast"
];

let i=0;
let j=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

const word=words[i];

if(!deleting){

typing.textContent=word.substring(0,j++);

if(j>word.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=word.substring(0,j--);

if(j<0){

deleting=false;

i=(i+1)%words.length;

}

}

setTimeout(type,deleting?45:90);

}

type();

/* ======================
   SCROLL REVEAL
====================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));