const axios = require("axios");

axios.get('https://movie-database-imdb-alternative.p.rapidapi.com/')
        .then((response) => {
            console.log(response.data)
            
        })
        .catch((error) => {
            console.log('error hitting api', error);
        });
  