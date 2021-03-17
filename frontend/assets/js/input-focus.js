let inputforms = document.querySelectorAll('.input-main');
let placeholder = document.querySelectorAll('.placeholder');
let numm = document.querySelectorAll('.numm');
let errorClose = document.querySelector('.alert-text');
let errorAlert = document.querySelector('.error-alert');
let innerErrorText = document.querySelector('.inner-error-text');

// let inputforms = $('.input-main');
// let placeholder = $('.placeholder');

for (let i = 0; i < inputforms.length; i++) {
    const element = inputforms[i];
    // console.log(element)
    let vall = element.value;
    if(vall.length < 1) {
            placeholder[i].classList.remove("onfocus");
        } else {
            placeholder[i].classList.add("onfocus");
        }

    element.addEventListener("focusin", () => {
        // let vall = element.value;
        // console.log(vall.length);
        placeholder[i].classList.add("onfocus");
    });


    element.addEventListener("focusout", ()=> {
        let vall = element.value;
        if(vall.length < 1) {
            placeholder[i].classList.remove("onfocus");
        } else {

        }
    });

}

errorClose.addEventListener('click', () => {
    errorAlert.style.height = "0rem";
    errorAlert.style.border = "none";

})



