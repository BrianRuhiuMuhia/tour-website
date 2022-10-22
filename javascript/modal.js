const btn=document.querySelector(".mobile-nav-btn");
const list=document.querySelector(".header__links");
const body=document.querySelector("body")
const header=document.querySelector(".header")
btn.addEventListener("click",function()
{
list.classList.toggle("nav-open")
    body.classList.toggle("overflow")
    header.classList.toggle("header--small")
   
})