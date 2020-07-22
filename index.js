const pokedex = require('pokedex-promise-v2')

var P = new pokedex();

P.getContestTypeByName('poison')
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});