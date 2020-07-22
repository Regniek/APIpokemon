const pokedex = require('pokedex-promise-v2')

var P = new pokedex();


P.getTypeByName('poison')
.then(function(response) {
  let poisonpokes = response.pokemon
  const poisontotal = Object.keys(response.pokemon).length
  console.log(`venenosos ${poisontotal}`);
  return poisonpokes
  
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


P.getGenerationByName('1')
.then(function(response) {
  let gne1 = response.pokemon_species
  console.log(`Primera Generacion ${Object.keys(response.pokemon_species).length}`);
  return gne1
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


P.getGenerationByName('2')
.then(function(response) {
  let gne2 = response.pokemon_species
  console.log(`Segunda Generacion ${Object.keys(response.pokemon_species).length}`);
  return gne2
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


P.getGenerationByName('3')
.then(function(response) {
  let gne3 = response.pokemon_species
  console.log(`Tercera Generacion ${Object.keys(response.pokemon_species).length}`);
  return gne3
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


P.getGenerationByName('4')
.then(function(response) {
  let gne4 = response.pokemon_species
  console.log(`Cuarta Generacion ${Object.keys(response.pokemon_species).length}`);
  return gne4
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


P.getGenerationByName('5')
.then(function(response) {
  let gne5 = response.pokemon_species
  console.log(`Quinta Generacion ${Object.keys(response.pokemon_species).length}`);
  return gne5
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});

async function compare(){
  try {
    let poison = await P.getTypeByName('poison');
    let generOne = await P.getGenerationByName('1');
    let generTwo = await P.getGenerationByName('2');
    let generThree = await P.getGenerationByName('3');
    let generFour = await P.getGenerationByName('4');
    let generFive = await P.getGenerationByName('5');
    let same = []
    for(var i = 0 ; i < Object.keys(poison.pokemon).length;i++) {
        for(var j = 0 ; j < Object.keys(generOne.pokemon_species).length;j++) {
            if(poison.pokemon[i].pokemon.name === generOne.pokemon_species[j].name){
                same.push(poison.pokemon[i].pokemon.name)
            }
        }
        
    }

    for(var i = 0 ; i < Object.keys(poison.pokemon).length;i++) {
      for(var j = 0 ; j < Object.keys(generTwo.pokemon_species).length;j++) {
          if(poison.pokemon[i].pokemon.name === generTwo.pokemon_species[j].name){
              same.push(poison.pokemon[i].pokemon.name)
          }
      }
      
    }
    for(var i = 0 ; i < Object.keys(poison.pokemon).length;i++) {
      for(var j = 0 ; j < Object.keys(generThree.pokemon_species).length;j++) {
          if(poison.pokemon[i].pokemon.name === generThree.pokemon_species[j].name){
              same.push(poison.pokemon[i].pokemon.name)

          }
      }
      
    }

    for(var i = 0 ; i < Object.keys(poison.pokemon).length;i++) {
      for(var j = 0 ; j < Object.keys(generFour.pokemon_species).length;j++) {
          if(poison.pokemon[i].pokemon.name === generFour.pokemon_species[j].name){
              same.push(poison.pokemon[i].pokemon.name)
          }
      }
      
    }

    for(var i = 0 ; i < Object.keys(poison.pokemon).length;i++) {
      for(var j = 0 ; j < Object.keys(generFive.pokemon_species).length;j++) {
          if(poison.pokemon[i].pokemon.name === generFive.pokemon_species[j].name){
              same.push(poison.pokemon[i].pokemon.name)
          }
      }
      
    }
    console.log(same.length)
    console.log(same)

  } catch (error) {
    console.log(error)
  }
  


}
compare();


