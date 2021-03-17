
async function allCountries(){


            // const htmlcontent = `
            // <option> looool </option>
            // `;
            // $('.countriesList').append(htmlcontent)

    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzkzNTU0MmI3MmQ0MDAxNTE2ZWYxYSIsImlhdCI6MTYxNDM2MzE5OCwiZXhwIjoxNjE2OTU1MTk4fQ.dY0lUIDQayNb9LuCTbmYWw2UtYhUwDZ8nzVZVu7qRjE");

        var raw = "";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: raw,
        redirect: 'follow'
        };

        fetch("https://whispering-inlet-62950.herokuapp.com/api/v1/countries/get-countries?limit=1000", requestOptions)
        .then(response => response.json())
        .then(result => {

            // let countriesList = document.querySelector('.countryOptions');
            // let options = document.createElement("option");
            let data = result.data.data
           
            // main.append(htmlcontent);
            data.forEach(datum => {
                const htmlcontent = `
            <option class="countryOptions"> ${ datum.destinationCountry  } </option>
            `

                // console.log(datum.destinationCountry)
                $('.countriesList').append(htmlcontent)
            });
        })

        .catch(error => console.log('error', error));
        
      
    } catch (error) {
      console.log(error);  
    }

}

allCountries();
           