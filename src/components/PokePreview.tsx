import axios from "axios";
import { useEffect, useState } from "react";

interface PokePreviewProps {
  pokemonURL: string;
}

export default function PokePreview({ pokemonURL }: PokePreviewProps) {
  const [pokemon, setPokemon] = useState<any>(null);
  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonURL);
      setPokemon(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <article className="text-center">
      <header className="flex justify-center">
        <img
          className=""
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"]["animated"]
              .front_default
          }
          alt=""
        />
      </header>
      <span>{pokemon?.id}</span>
      <h3>{pokemon?.name}</h3>
      <ul>
        {pokemon?.types.map((type: any) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </article>
  );
}
