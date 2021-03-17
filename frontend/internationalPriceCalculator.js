async function intPriceCalc(){

    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"shipmentType":"export","dropoffCountry":"algeria","pickupCountry":"nigeria","weight":12});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://whispering-inlet-62950.herokuapp.com/api/v1/pricing/calculate-international-price", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    } catch (error) {
      console.log(error);  
    }

}
