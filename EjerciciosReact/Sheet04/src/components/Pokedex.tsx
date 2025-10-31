import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_shiny: string;
  };
  types: PokemonType[];
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const cantidadPokemon = 150;

  const fetchPokemon = async (id: number): Promise<Pokemon> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const cargarPokemons = async () => {
      const promises = [];
      for (let id = 1; id <= cantidadPokemon; id++) {
        promises.push(fetchPokemon(id));
      }
      const results = await Promise.all(promises);
      setPokemons(results);
      setFilteredPokemons(results);
    };

    cargarPokemons();
  }, []);

  useEffect(() => {
    const texto = search.toLowerCase();
    const filtrados = pokemons.filter((poke) =>
      poke.name.toLowerCase().includes(texto)
    );
    setFilteredPokemons(filtrados);
  }, [search, pokemons]);

  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div id="pokedex" className="pokedex-container">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
