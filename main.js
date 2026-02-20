const burger = document.querySelector(".burger-toggle");
const header = document.querySelector(".header");
console.log(burger, header);
burger?.addEventListener("click", ()=> 
{
    header.classList.toggle("closed")
})
const btnGardens = document.querySelector(".gardens-btn");
const btnLawn = document.querySelector(".lawn-btn");
const btnPlanting = document.querySelector(".planting-btn");
const gardens = Array.from(document.querySelectorAll(".service-item-gardens .services-img")); 
const lawn = document.querySelectorAll(".service-item-lawn .services-img");
const planting = document.querySelectorAll(".service-item-planting .services-img");
function distinguishSelectedProducts (btn) {
    console.log("hi");
    if (btn == "gardens-btn") {
        console.log("gardens", gardens);
        // lawn.forEach( (div)=> {
        //     div.classList.toggle("blur");
        // });
        // planting.forEach( (div)=> {
        //     div.classList.toggle("blur");
        // });
        gardens.forEach( (div)=> {
            div.classList.remove("blur");
        });
    }
    if (btn == "lawn-btn") {
        console.log("lawn", lawn);
        // planting.forEach( (div)=> {
        //     div.classList.toggle("blur");
        // });
        // gardens.forEach( (div)=> {
        //     div.classList.toggle("blur");
        // });
        lawn.forEach( (div)=> {
            div.classList.remove("blur");
        });
    }
    if (btn == "planting-btn") {
        console.log("planting", planting);
        // lawn.forEach( (div)=> {
        //     div.classList.toggle("blur");
        // });
        // gardens.forEach( (div)=> {
        //     div.classList.toggle("blur");
        // });
        planting.forEach( (div)=> {
            div.classList.remove("blur");
        });
    }
}
