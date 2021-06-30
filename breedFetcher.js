const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, response, body) {
  if (error) throw new error;
  const data = JSON.parse(body);
  console.log(data[0].description);
});
