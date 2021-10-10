const pokeList = document.querySelector(".poke__list");

const getPokemons = async() => {
    let pokeFetch = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`);
    let dataPokemon = await pokeFetch.json();
    console.log(dataPokemon)

    const pokemons = dataPokemon.results.map((element, idx) => ({
        id: element.id,
        name: element.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx+1}.png`

    }))
    displayCharacters(pokemons)
}

const displayCharacters = (pokemons) => {
    const pokemonHTML = pokemons.map((pokemon) => 
        `<li class = "poke__element">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt=${pokemon.name}"/>
        <p>Número #${pokemon.id}</p>
        </li>`).join("");

    pokeList.innerHTML = pokemonHTML;

}
getPokemons();