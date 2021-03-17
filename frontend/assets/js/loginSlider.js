let login_btn = document.querySelector('#login-btn');
let register_btn = document.querySelector('#register-btn');
let login_screen = document.querySelector('.login-sec');
let register_screen = document.querySelector('.register-sec');
let lr_whole = document.querySelector('.lr-whole');
let whole = document.querySelector('.login-register');
let hero = document.querySelector('.hero');
let cancel = document.querySelector('.cancel');
let login = document.querySelector('#login');


login_btn.addEventListener("click", () => {
    if(whole.style.right = "-100%") {
        whole.style.right = "5rem";
        lr_whole.style.transform = "translateX(0%)";
        
        // setTimeout(() => {
         
        // }, 500);
    }
    else if(whole.style.right = "-100%"){
        console.log("yeet");
        lr_whole.style.transform = "translateX(0%)";
    }
  
});

register_btn.addEventListener("click", () => {

    if(whole.style.right = "-100%") {
        whole.style.right = "5rem";
        lr_whole.style.transform = "translateX(-100%)";
        
        // setTimeout(() => {
         
        // }, 500);
    }
    else if(whole.style.right = "-100%"){
        // console.log("yeet");
        lr_whole.style.transform = "translateX(-100%)";
    }

    // console.log("hurray");
    
});

whole.addEventListener("click", () => {
    // console.log('...');
});

hero.addEventListener("click", () => {
    whole.style.right = "-100%";
});

cancel.addEventListener("click", () => {
    whole.style.right = "-100%";
});


