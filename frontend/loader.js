function loader() {

    let linerfill = document.querySelector('.liner-fill');
    // let loaderScreen = document.querySelector('.loader-screen');
    document.addEventListener('readystatechange', ()=>{
        if(document.readyState == ''){
            // linerfill.style.width = "10%";
        } else if(document.readyState == 'loading') {
            // let complete = Array(1,2,3,4,5,6,7,8,9,10);
            // complete.forEach(item => {
            //     setTimeout(()=>{
            //         console.log(item)
            //         linerfill.style.width = `${item*10}%`;
                    
            //     },item*100)
            // });
       
        }
    })


    

}

loader();