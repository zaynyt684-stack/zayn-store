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


/* ==========================================
   ZAYN STORE
   Product Page JavaScript
========================================== */


/* ==========================================
   Product Search
========================================== */


function initProductSearch(){

const searchBtn = document.querySelector(".search-btn");

const products = document.querySelectorAll(
".store-product-card"
);


if(!searchBtn || !products.length) return;



searchBtn.addEventListener("click",()=>{


let keyword = prompt(
"Search Product"
);


if(!keyword) return;



keyword = keyword.toLowerCase();



products.forEach(product=>{


let text = product.innerText.toLowerCase();



if(text.includes(keyword)){

product.style.display="block";

}

else{

product.style.display="none";

}



});


});


}




/* ==========================================
   Buy Button Animation
========================================== */


function initBuyButtons(){


document.querySelectorAll(".buy-btn")
.forEach(button=>{


button.addEventListener("click",()=>{


showToast(
"Product Added To Cart 🛒"
);



button.innerHTML =
`
<i class="fa-solid fa-check"></i>
 Added
`;



setTimeout(()=>{


button.innerHTML="Buy Now";


},2000);



});


});


}





/* ==========================================
   Category Hover Soundless Effect
========================================== */


function initProductHover(){


document.querySelectorAll(
".store-product-card,.mini-category"
)
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;



const y =
e.clientY - rect.top;



const centerX =
rect.width/2;



const centerY =
rect.height/2;



const rotateX =
(y-centerY)/20;



const rotateY =
(centerX-x)/20;



card.style.transform =
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";



});



});


}





/* ==========================================
   Newsletter
========================================== */


function initNewsletter(){


const button =
document.querySelector(
".newsletter-form button"
);



const input =
document.querySelector(
".newsletter-form input"
);



if(!button || !input)
return;



button.addEventListener(
"click",
()=>{


if(input.value.trim()===""){


showToast(
"Please enter email"
);


return;

}



showToast(
"Subscribed Successfully 🎉"
);



input.value="";



});


}





/* ==========================================
   Product Page Loader
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


initProductSearch();

initBuyButtons();

initProductHover();

initNewsletter();


});



console.log(
"✅ Zayn Store Product System Loaded"
);
