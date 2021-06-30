const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback('Server responded with: ' + response.statusCode, null);
      return;
    }

    const data = JSON.parse(body);
    if (!data[0].description) {
      callback('Breed description not found!', null);
      return;
    }

    callback(null, data[0].description.trim());
  });
};

module.exports = {
  fetchBreedDescription
};

