/* ==========================================
   ZAYN STORE
   Premium Script.js
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


    initLoader();

    initNavbar();

    initMobileMenu();

    initSmoothScroll();

    initReveal();

    initCounter();

    initRipple();

    initScrollTop();

    initSearch();

    initLogoAnimation();


});



/* ==========================================
   Loader
========================================== */

function initLoader(){

const loader=document.getElementById("loader");

if(!loader) return;


setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";


setTimeout(()=>{

loader.remove();

},500);


},1200);


}




/* ==========================================
 Navbar Scroll
========================================== */


function initNavbar(){

const navbar=document.querySelector(".navbar");

if(!navbar)return;


window.addEventListener("scroll",()=>{


if(window.scrollY>30){

navbar.classList.add("navbar-scrolled");

}

else{

navbar.classList.remove("navbar-scrolled");

}


});


}





/* ==========================================
 Mobile Menu
========================================== */


function initMobileMenu(){

const btn=document.querySelector(".menu-btn");

const menu=document.querySelector(".nav-links");


if(!btn || !menu)return;



btn.addEventListener("click",()=>{


menu.classList.toggle("show-menu");


});


}







/* ==========================================
 Active Navigation
========================================== */


const page=location.pathname.split("/").pop();


document.querySelectorAll(".nav-links a")
.forEach(link=>{


let href=link.getAttribute("href");


if(href===page || (page==="" && href==="index.html")){


link.classList.add("active");


}


});







/* ==========================================
 Smooth Scroll
========================================== */


function initSmoothScroll(){


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",e=>{


let target=document.querySelector(
anchor.getAttribute("href")
);


if(!target)return;


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


});


});


}







/* ==========================================
 Reveal Animation
========================================== */


function initReveal(){


const elements=document.querySelectorAll(

".feature-card,.category-card,.product-card,.stat-card,.testimonial-card,.floating-card,.cta-box"

);



if(!elements.length)return;



const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{


threshold:.15


});



elements.forEach(el=>observer.observe(el));


}







/* ==========================================
 Counter Animation
========================================== */


function initCounter(){


const counters=document.querySelectorAll(".stat-card h2");



counters.forEach(counter=>{


let value=counter.innerText;


let number=parseInt(value);


let suffix=value.replace(/[0-9]/g,"");


let current=0;



let interval=setInterval(()=>{


current+=Math.ceil(number/60);



if(current>=number){


current=number;

clearInterval(interval);


}



counter.innerText=current+suffix;



},30);



});


}







/* ==========================================
 Button Ripple
========================================== */


function initRipple(){


document.querySelectorAll(

".primary-btn,.secondary-btn,.buy-btn,.login-btn"

)
.forEach(btn=>{


btn.addEventListener("click",function(e){



let circle=document.createElement("span");


circle.className="ripple";


let size=Math.max(
this.offsetWidth,
this.offsetHeight
);


circle.style.width=size+"px";

circle.style.height=size+"px";



let rect=this.getBoundingClientRect();



circle.style.left=
e.clientX-rect.left-size/2+"px";


circle.style.top=
e.clientY-rect.top-size/2+"px";



this.appendChild(circle);



setTimeout(()=>{

circle.remove();

},700);



});


});


}








/* ==========================================
 Scroll Top
========================================== */


function initScrollTop(){


const btn=document.getElementById("scrollTop");


if(!btn)return;



window.addEventListener("scroll",()=>{


if(window.scrollY>500){

btn.classList.add("show");

}

else{

btn.classList.remove("show");

}


});



btn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}








/* ==========================================
 Mouse Glow Effect
========================================== */


document.addEventListener("mousemove",e=>{


document.querySelectorAll(

".feature-card,.category-card,.product-card"

)
.forEach(card=>{


let rect=card.getBoundingClientRect();



card.style.setProperty(
"--x",
e.clientX-rect.left+"px"
);



card.style.setProperty(
"--y",
e.clientY-rect.top+"px"
);



});


});







/* ==========================================
 Search System
========================================== */


function initSearch(){


const search=document.querySelector(".search-box input");


if(!search)return;



search.addEventListener("input",()=>{


let value=search.value.toLowerCase();



document.querySelectorAll(
".product-card,.category-card"
)
.forEach(card=>{


let text=card.innerText.toLowerCase();



card.style.display=
text.includes(value)
?
""
:
"none";



});


});


}








/* ==========================================
 Logo 3D Animation
========================================== */


function initLogoAnimation(){


const logo=document.querySelector(".logo img");


if(!logo)return;



logo.addEventListener("mousemove",e=>{


let x=(window.innerWidth/2-e.clientX)/30;

let y=(window.innerHeight/2-e.clientY)/30;



logo.style.transform=
`rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;


});



logo.addEventListener("mouseleave",()=>{


logo.style.transform=
"rotateY(0deg) rotateX(0deg) scale(1)";


});


}



console.log("✅ Zayn Store Premium Script Loaded");
