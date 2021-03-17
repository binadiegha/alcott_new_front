const loginBtn = document.querySelector('#login')
let loginEmail = $('#loginEmail');
// const loginPassword = document.getElementById("loginPassword").value;

let loginPassword = $('#loginPassword');
async function userLogin(){
   
   

    // console.log(loginPassword.val());
    // console.log(loginEmail);
    try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzkzNTU0MmI3MmQ0MDAxNTE2ZWYxYSIsImlhdCI6MTYxNDU1MTMzMiwiZXhwIjoxNjE3MTQzMzMyfQ.DK1ktDswwvf00XcoNTC6EKyeeEVZnCYkpn9yCK3Xszg");
        
        var raw = JSON.stringify({
          "username":`${loginEmail.val()}`,
          "password":`${loginPassword.val()}`
        });
        // var raw = JSON.stringify({"username":"jbg4k","password":"google..."});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        var d = new Date();
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var t = d.getTime()
        var expiry = new Date(t+(days*31))
        // console.log(t)
        // console.log(expiry)
        
        fetch("https://whispering-inlet-62950.herokuapp.com/api/v1/users/login", requestOptions)
          .then(response => response.json())
          .then((result) => {
            console.log(result)
              if(result.status == "fail") {
                errorAlert.style.height = "4rem";
                errorAlert.style.border = " border: 1.5px solid red;";
                innerErrorText.innerHTML = result.message
              }
              else {
                console.log(result.token)

                // set cookies
                document.cookie = `soft_token=${result.token}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `id=${result.data.data.id}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `balance=${result.data.data.wallet.balance}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `history=${JSON.stringify(result.data.data.wallet.history)}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `firstName=${result.data.data.firstName}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `lastName=${result.data.data.lastName}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `username=${result.data.data.username}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `email=${result.data.data.email}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `phone=${result.data.data.phone}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `address=${result.data.data.address}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `state=${result.data.data.state}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `country=${result.data.data.country}; expires=${expiry}; SameSite=LAX; path=/` 
                document.cookie = `dateJoined=${result.data.data.dateJoined}; expires=${expiry}; SameSite=LAX; path=/` 
                
                console.log( result.token )
                console.log( result.data.data.wallet.balance )
                console.log( result.data.data.wallet.history )
                // window.location.href = "/dashboard"
              }
          })
          .catch(error => console.log('error', error));
            
    } catch (error) {
      console.log(error);  
    }
    
}

loginBtn.addEventListener('click', userLogin);


// if(result.status == "fail") {
//   errorAlert.style.height = "4rem";
//   errorAlert.style.border = " border: 1.5px solid red;";
//   innerErrorText.innerHTML = result.message
// }
// else {
//   window.location.href = "/dashboard"
// }