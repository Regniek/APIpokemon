
# README.MD
Este repositorio contiene un script para integrar la API de pokemon y generar una busqueda, dependiendo que tipo de pokemon buscamos y de que generacion.

## Contenido
Este repositorio solo contiene una rama **master**

## Instalacion
Luego de clonar el repositorio no olvides instalar  ``` NPM INSTALL ```, el por defecto te va instalar las dependencias de **apipokemon**.

## Como esta compuesto

El script esta realizado por promesas y funciones asincronas, esto pensado en generar practica de lo aprendido.

a partir de las promesas lo que hacemos es el llamado a la API de pokemon y traemos una consulta realizada por ejemplo en el siguiente script veras como se llamo el tipo veneno desde una promesa, para no traer todo el objeto se usa un **object.keys** para traer solo los nombres de los pokemon:

```

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

```
en este caso estoy llamando un tipo de pokemon venenoso = poison, pero puedes llamar cualquier tipo solo pasandolo por la funcion.

igualmente ahora veras una promesa para llamar los pokemon por su generación:

```
P.getGenerationByName('1')
.then(function(response) {
  let gne1 = response.pokemon_species
  console.log(`Primera Generacion ${Object.keys(response.pokemon_species).length}`);
  return gne1
})

```

en el cual estoy llamando la generacion 1 pero igualmente puedes pasarle cualquier generacion.

este es su uso principal, pero agrege un pequeño algoritmo para poder combinar estos dos llamados y apartir de una funcion asincrona entrega por la consola la cantidad de pokemon de un tipo por una generacion especifica, espero te diviertas y aprendas mucho.

## Como contribuir al repositorio
para agregar actualizaciones, recuerda siempre hace run frok al repo y luego enviar tu pull request, estare muy contento de leerlo y con gusto hacerle un merge.

### PostData:
no olvides pasar por  [Regniek.dev](https:www.regniek.dev), y recuerda cualquier feedback es amor y lo recibire con gusto, gracias por leerme.



