const pokedexContainer = document.getElementById("pokedex");
const searchInput = document.getElementById("search");
const cantidadPokemon = 150;
const allPokemons = [];

async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
}

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokedex");

  // Tipos (puede tener 1 o 2)
  const types = pokemon.types
    .map((t) => `<p class="tipo1">${t.type.name.toUpperCase()}</p>`)
    .join("");

  // Imagen sprite
  const imgURL = pokemon.sprites.front_shiny;

  // HTML de la tarjeta
  card.innerHTML = `
    <div class="gray-container">
      <a href="https://pokemondb.net/pokedex/${pokemon.name}" target="_blank">
        <img src="${imgURL}" alt="${pokemon.name}" />
      </a>
      <p class="id">ID/${pokemon.id}</p>
    </div>
    <div class="white-container">
      <h2 class="nombre">${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</h2>
      <div class="tipos">
        ${types}
      </div>
      <p class="evolucion">Evolución: ${fetchPokemon(pokemon.id + 1).name}</p> 
    </div>
  `;

  pokedexContainer.appendChild(card);
}

function renderPokemons(pokemonsToShow) {
  pokedexContainer.innerHTML = ""; // Limpia todo antes de mostrar
  pokemonsToShow.forEach((pokemon) => createPokemonCard(pokemon));
}

async function cargarPokemons() {
  for (let id = 1; id <= cantidadPokemon; id++) {
    const pokemon = await fetchPokemon(id);
    allPokemons.push(pokemon);
  }
  renderPokemons(allPokemons); // Renderiza todos al principio
}

searchInput.addEventListener("input", () => {
  const texto = searchInput.value.toLowerCase();
  const resultadosFiltrados = allPokemons.filter((poke) =>
    poke.name.toLowerCase().includes(texto)
  );
  renderPokemons(resultadosFiltrados);
});

cargarPokemons();
