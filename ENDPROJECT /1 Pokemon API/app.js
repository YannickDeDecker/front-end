const poke_container = document.getElementById('poke_container');
const pokemons_number = 1000;
const colors = {
	fire: '#EE8130',
	grass: '#7AC74C',
	electric: '#F7D02C',
	water: '#6390F0',
	ground: '#E2BF65',
    rock: '#B6A136',
    ice: '#96D9D6',
	fairy: '#D685AD',
	poison: '#A33EA1',
	bug: '#A6B91A',
	dragon: '#6F35FC',
	psychic: '#F95587',
	flying: '#A98FF3',
	fighting: '#C22E28',
    normal: '#A8A77A',
    ghost: '#735797',
    dark: '#705746',
    steel: '#B7B7CE'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
							pokemon.id
						}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons();
