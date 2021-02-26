let photoInner = document.getElementById("photo-inner");
let images = document.querySelectorAll(".photo-holder .img-container");
let val = 0;
let oldVal = 0;
let leftArrowButton = document.getElementById("left-arrow-bt");
let rightArrowButton = document.getElementById("right-arrow-bt");
/* let pushed = document.getElementsByClassName("pushed");
let card = document.getElementsByClassName("card");
let cardInner = document.getElementsByClassName("card-inner-container");
let leftCardBtn = document.getElementById("left-card-arrow");
let rightCardBtn = document.getElementById("right-card-arrow"); */
let cardSay = 0;
/* let amount = 100/card.length; */
let innerRow = document.querySelector(".inner-row");
let card1 = document.querySelectorAll(".card-1");
let card1ArrowLeft = document.querySelector(".card-1-left");
let card1ArrowRight = document.querySelector(".card-1-right");
let card1Say = 0;
let card1Amount = 100/card1.length;

document.querySelectorAll(".text-container-inner")[val].classList.add("text-container-inner-trans");
document.querySelectorAll(".kesfet")[val].classList.add("kesfet-trans");

console.log(card1ArrowLeft,card1ArrowRight);

card1ArrowRight.addEventListener("click",card1Ileri);
card1ArrowLeft.addEventListener("click",card1Geri);

innerRow.style.width = `${(card1.length)/5*100}%`;

/* cardInner[0].style.width = `${(card.length)/4*100}%`; */

/* rightCardBtn.addEventListener("click" , ileri) ; */
/* leftCardBtn.style.filter = ("grayscale(50%)"); */

leftArrowButton.addEventListener("click", decrement);
rightArrowButton.addEventListener("click", increment);

photoInner.style.width = `${document.querySelectorAll(".photo-holder img").length*100}%`;

for(let i = 0; i<images.length; i++){
    images[i].style.width = `${100/images.length}%`;
};

document.getElementsByClassName("nav-box")[0].addEventListener("click", () => {oldVal = val; val = 0;photoInner.style.transform = `translateX(-${100/images.length*val}%)`;scaleDown();buttonSwitch();});

for(let i = 1; i<images.length; i++){    
    let myNode = document.getElementsByClassName("nav-box")[0].cloneNode(true);
    document.getElementById("landing-navigator").appendChild(myNode);
    document.getElementsByClassName("nav-box")[i].addEventListener("click", () => {
        oldVal=val; val = i;
        photoInner.style.transform = `translateX(-${100/images.length*val}%)`;
        scaleDown();
        buttonSwitch();
        setTimeout(()=>{
            document.querySelectorAll(".text-container-inner")[val].classList.add("text-container-inner-trans");
            document.querySelectorAll(".text-container-inner")[oldVal].classList.remove("text-container-inner-trans");
            document.querySelectorAll(".kesfet")[val].classList.add("kesfet-trans");
            document.querySelectorAll(".kesfet")[oldVal].classList.remove("kesfet-trans");
        },500)
    });
};

/* Functions */
buttonSwitch();
scaleDown();
looper(); 

function card1Ileri (){

    if(card1Say == 0){
        card1ArrowLeft.style.opacity = "1";
        card1ArrowLeft.style.pointerEvents = "all";
    }

    console.log("ileri");
    card1Say++;
    innerRow.style.transform = `translateX(-${card1Say*card1Amount}%)`;
    console.log(card1Say*card1Amount);

    if(card1Say == (card1.length-5)){
        card1ArrowRight.style.opacity = "0";
        card1ArrowRight.style.pointerEvents = "none";
    }
};

function card1Geri (){

    if(card1Say == (card1.length-5)){
        card1ArrowRight.style.opacity = "1";
        card1ArrowRight.style.pointerEvents = "all";
    }

    console.log("geri");
    card1Say--;
    innerRow.style.transform = `translateX(-${card1Say*card1Amount}%)`;
    console.log(card1Say*card1Amount);

    if(card1Say == 0){
        card1ArrowLeft.style.opacity = "0";
        card1ArrowLeft.style.pointerEvents = "none";
    }
};

/* function ileri(){
    
    if (cardSay == 0){
        leftCardBtn.addEventListener("click",geri);
        leftCardBtn.style.filter = ("grayscale(0%)");
    };
    cardSay++;
    cardInner[0].style.transform = `translateX(-${cardSay*amount}%)`; 
    if (cardSay == (card.length-4)){
        rightCardBtn.style.filter = ("grayscale(50%)");
        rightCardBtn.removeEventListener("click",ileri);
        leftCardBtn.addEventListener("click",geri);
    };
    
}

function geri(){
    
    if (cardSay == (card.length-4)){
        rightCardBtn.addEventListener("click",ileri);
        rightCardBtn.style.filter = ("grayscale(0%)");
    };
    cardSay--;
    cardInner[0].style.transform = `translateX(-${cardSay*amount}%)`; 
    if (cardSay == 0){
        leftCardBtn.style.filter = ("grayscale(50%)");
        leftCardBtn.removeEventListener("click",geri);
        rightCardBtn.addEventListener("click",ileri);
    }; 
    
} */

function decrement(){
    oldVal = val;

    if(val==0){
        val=images.length-1;
    }

    else {
        val--;
    }
    photoInner.style.transform = `translateX(-${100/images.length*val}%)`;
    setTimeout(()=>{
        document.querySelectorAll(".text-container-inner")[val].classList.add("text-container-inner-trans");
        document.querySelectorAll(".text-container-inner")[oldVal].classList.remove("text-container-inner-trans");
        document.querySelectorAll(".kesfet")[val].classList.add("kesfet-trans");
        document.querySelectorAll(".kesfet")[oldVal].classList.remove("kesfet-trans");
    },500)
    scaleDown();
    buttonSwitch();
};

function increment(){
    oldVal = val;
    val++;
    val=val % images.length;
    setTimeout(()=>{
        document.querySelectorAll(".text-container-inner")[val].classList.add("text-container-inner-trans");
        document.querySelectorAll(".text-container-inner")[oldVal].classList.remove("text-container-inner-trans");
        document.querySelectorAll(".kesfet")[val].classList.add("kesfet-trans");
        document.querySelectorAll(".kesfet")[oldVal].classList.remove("kesfet-trans");
    },500)
    photoInner.style.transform = `translateX(-${100/images.length*val}%)`;
    scaleDown();
    buttonSwitch();
};

function scaleDown(){
    document.getElementsByClassName("slider-img")[oldVal].style.transitionDuration = "50ms";
    document.getElementsByClassName("slider-img")[oldVal].style.transform = "scale(1.2)";
    document.getElementsByClassName("slider-img")[oldVal].style.transition = "ease-in-out 8000ms";
    document.getElementsByClassName("slider-img")[val].style.transform = "scale(1)";
};

function buttonSwitch() {
    if(val == oldVal){
        document.getElementsByClassName("nav-box")[val].style.backgroundColor = "rgb(189, 189, 189)";
    }
    else {
        document.getElementsByClassName("nav-box")[val].style.backgroundColor = "rgb(189, 189, 189)";
        document.getElementsByClassName("nav-box")[oldVal].style.backgroundColor = "";
    }
};

function looper (){
    setTimeout(() => {increment(); looper();},10000);
};