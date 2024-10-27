const list = ["dog","cat","fish","bird","spider"];
const space = document.getElementById("space");
const button = document.getElementById("btn");
const display = document.getElementById('display');
const box = document.getElementById("box")
const angleup = "fa-angle-up"
const angledown = "fa-angle-down"

let isopen = false;

box.addEventListener("click", toggleList);

function toggleList() {
    if(isopen){
        button.classList.toggle(angleup);
        button.classList.toggle(angledown);       
        space.innerHTML = "";
        isopen = !isopen;
    }else{
        space.innerHTML = list.map((item) => `<li onclick=clickOption(event) >${item}</li>`).join("");
        button.classList.toggle(angledown);
        button.classList.toggle(angleup); 
        isopen = !isopen;
    }
}

function clickOption(e){
    display.innerHTML = e.target.innerHTML
}