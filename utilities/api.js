const axios = require('axios');

const api = (query, page, callback) => {
  const url = 'https://pixabay.com/api/?key=' + your api key + '&q=';

  axios.get(url + query + "&page=" + page)
       .then( (response) => {
         callback(response.data.hits);
       })
       .catch( (error) => {
         throw error;
       });
}

module.exports = api;
