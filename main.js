const burger = document.querySelector(".burger-toggle");
const header = document.querySelector(".header");
console.log(burger, header);
burger?.addEventListener("click", ()=> 
{
    header.classList.toggle("closed")
})