const pokemonCount = 151
let pokedex = {} // {1 : {'name' : bulbasaur, img : url, type : [grass, poison], desc : "..."}}

window.onload = async function() {
  getPokemon(1)
}

async function getPokemon(num) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString()
  
  let res = await fetch(url)
  let pokemon = await res.json()
  console.log(pokemon)

  let pokemonName = pokemon['name']
  let pokemonTypes = pokemon['types']
  let pokemonImg = pokemon['sprites']['front_default']

  res = await fetch(pokemon['species']['url'])
  let pokemonDesc = await res.json()

  // console.log(pokemonDesc)
  pokemonDesc = pokemonDesc['flavor_text_entries'][10]['flavor_text']

  pokedex[num] = {'name' : pokemonName, 'img' : pokemonImg, 'types' : pokemonTypes, 'desc' : pokemonDesc}
}