// function cookiecheck() {
//     let token = getCookie("soft_token");
//     if (!token){
//         console.log("err...")
//     }
//     else {
//         console.log(token)
//     }
// }

// cookiecheck();

var body = document.querySelector('.body');

// $(document).ready( function() {
    
// })
// if (!$(document).ready){
   
// } else {
//     let token = "soft_tokenf";

//     function getCookie(name) {
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2){
//             // return parts.pop().split(';').shift();
//             console.log( parts.pop().split(';').shift() );
//         } else {
//             window.location.href = "/"
//         }
    
//     }

//     getCookie(token);
// }



// document.addEventListener('readystatechange',()=>{
//     if(document.readyState !== "complete"){
//         // body.style.display = "none";
//     } else {
//         body.style.color = "flex";
        
//     }
// })
let fullData = Array(
    'soft_token',
    'balance',
    '_id'
)
let token = "soft_token";

        function  getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            let loaderScreen = document.querySelector('.loader-screen');
            if (parts.length === 2){
                // return parts.pop().split(';').shift();
                console.log( parts.pop().split(';').shift() );
                loaderScreen.style.display = "none";
            } else {
                // window.location.href = "/"
            }
        
        }

        function cookieSaver(){
            fullData.forEach(datum => {
                getCookie(datum)
            });
        }

        
setTimeout(cookieSaver, 2000, token);