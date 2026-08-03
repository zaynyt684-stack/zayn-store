// Zayn Store Website Script

console.log("Zayn Store Loaded Successfully");


const exploreBtn = document.querySelector("button");


if(exploreBtn){

    exploreBtn.addEventListener("click",()=>{

        document.querySelector(".features")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}


// Card animation

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition="0.3s";

    });

});
