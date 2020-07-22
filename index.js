const pokedex = require('pokedex-promise-v2')

var P = new pokedex();

let pokemones = [];

P.getTypeByName("poison")
.then(function(response) {
  const poisonpokes = response.pokemon
  const poisontotal = Object.keys(response.pokemon).length
  console.log(poisontotal,poisonpokes);
  
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


// P.getGenerationByName("generation-1")
// .then(function(response) {
//   console.log(response.length);
// })
// .catch(function(error) {
//   console.log('There was an ERROR: ', error);
// });