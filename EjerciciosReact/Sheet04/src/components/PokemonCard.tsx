import React from "react";

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

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const types = pokemon.types.map((t) => (
    <p key={t.type.name} className="tipo1">
      {t.type.name.toUpperCase()}
    </p>
  ));

  const imgURL = pokemon.sprites.front_shiny;
  const capitalizedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="pokedex">
      <div className="gray-container">
        <a
          href={`https://pokemondb.net/pokedex/${pokemon.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgURL} alt={pokemon.name} />
        </a>
        <p className="id">ID/{pokemon.id}</p>
      </div>
      <div className="white-container">
        <h2 className="nombre">{capitalizedName}</h2>
        <div className="tipos">{types}</div>
        <p className="evolucion">Evolución: ???</p>
      </div>
    </div>
  );
};

export default PokemonCard;
