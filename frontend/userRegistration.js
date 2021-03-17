async function userRegistration(){
    try {

        // console.log(email);
        // console.log(password);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzkzNTU0MmI3MmQ0MDAxNTE2ZWYxYSIsImlhdCI6MTYxNDM2MTk0MCwiZXhwIjoxNjE2OTUzOTQwfQ.nqN0WgFNOc16CW4gpl_-h5a--V62W_TAWow6Zq0wWWw");

        var raw = JSON.stringify({"firstName":"Jones","lastName":"Gabriel","username":"jbg4dk","email":"jbg4k.connecddt@gmail.com","password":"google...","confirmPassword":"google...","phone":"08138591185","address":"Lekki, lekki","state":"Lagos","country":"Nigeria"});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        // mode: 'cors',
        // credentials: 'include'
        };

      

        fetch("https://whispering-inlet-62950.herokuapp.com/api/v1/users/signup", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
            
    } catch (error) {
      console.log(error);  
    }
    
}