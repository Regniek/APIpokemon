const pokedex = require('pokedex-promise-v2')

var P = new pokedex();
result =[];

P.getGenerationByName("1")
.then(function(response) {
  //console.log(response.pokemon_species);
    for(var i in response.pokemon_species)
      result.push([response.pokemon_species [i]])
    console.log(result);
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});