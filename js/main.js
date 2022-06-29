let mainMenu = document.querySelector(".main-menu");
let toggle = document.querySelector(".toggle");

let openMenu = false;

toggle.addEventListener("click" , function () {
    if (openMenu === false){
        mainMenu.style.right = "0%";
        toggle.innerHTML = `<i class="bi bi-x-square"></i>`;
        openMenu = true;
        
    } else if (openMenu === true){
        mainMenu.style.right = "-50%"
        toggle.innerHTML = `<i class="bi bi-list"></i>`;
        openMenu = false;
    } 
   
} );