const pokemonCount = 151
let pokedex = {} // {1 : {'name' : bulbasaur, img : url, type : [grass, poison], desc : "..."}}

window.onload = function() {
  getPokemon(1)
}

function getPokemon(num) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString()
  
  let res = fetch(url)
  let pokemon = res.json()
  console.log(pokemon)
}