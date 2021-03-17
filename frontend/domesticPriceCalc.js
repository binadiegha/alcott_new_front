async function domesticPriceCalc(){

    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjcyNTJjZDljYTkxNDA0NDc2NWMzOCIsImlhdCI6MTYxNDQxODM3MiwiZXhwIjoxNjE3MDEwMzcyfQ.nuSYRbLppsvYkcUsQ8AyD_EcBkvo7TtkA-RjYTKfAKs");

        var raw = JSON.stringify({"shipmentType":"domestic","dropoffState":"lagos","pickupState":"ibadan","weight":12});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://whispering-inlet-62950.herokuapp.com/api/v1/pricing/calculate-domestic-price", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    } catch (error) {
      console.log(error);  
    }

}
