const pokeList = document.querySelector(".poke__list");

const getPokemons = async () => {
    const pokeArray = []
    for (let i = 1; i <= 151; i++) {
        let pokeFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let dataPokemon = await pokeFetch.json();
        
        pokeArray.push(dataPokemon);
        
    }
    const pokemonsMap = pokeArray.map((element) => ({
        id: element.id,
        name: element.name,
        image: element.sprites.other["official-artwork"]["front_default"],
        stats: element.stats[1]["base_stat"],
        stats2: element.stats[2]["base_stat"],
        
    }));

    
    displayPokemons(pokemonsMap);
}

const displayPokemons = (pokemons) => {
    const pokemonHTML = pokemons.map((pokemon) => 
    `<li class = "poke__element">
    <h2>${pokemon.name}</h2>
    <p class= "pokeId">#${pokemon.id}</p>
    <img src="${pokemon.image}" alt="${pokemon.name}"/>
    <p class= "pokeAtk">poder atk: ${pokemon.stats}</p>
    <p class= "pokeDef">poder def: ${pokemon.stats2}</p>
    </li>`).join("");

    pokeList.innerHTML = pokemonHTML;
    
}
getPokemons();