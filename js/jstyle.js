  const closebtn = document.querySelector(".closebtn");
const Openmenubtn = document.querySelector("Openmenu");
const menu = document.querySelector(".menu-list-items");

closebtn.addEventListener("click", ()=>{
    menu.style.right ="-270px";
    menu.style.transition ="all 400ms";
})
Openmenubtn.addEventListener("click", ()=>{
    menu.style.right ="270px";
    menu.style.transition ="all 400ms";
})   