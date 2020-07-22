const P = require('./index')




async function intersectionFun() {

    const posionPok = P.getTypeByName();
    const Gener1 = P.getGenerationByName();

    let poison =  posionPok.pokemon;
    let generOne =  Gener1.pokemon_species;
    
    let same = []

    for(var i = 0 ; i < Object.keys(poison).length;i++) {
        for(var j = 0 ; j < Object.keys(generOne).length;j++) {
            if(poison[i] === generOne[j]){
                same.push(poison[i])
            }
        }
        
    }
    console.log(same.length)
    
}
  
  intersectionFun();
  