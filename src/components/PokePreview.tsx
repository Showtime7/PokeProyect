import axios from "axios";
import { useEffect, useState } from "react";
import "../index.css";

interface PokePreviewProps {
  pokemonURL: string;
}

export default function PokePreview({ pokemonURL }: PokePreviewProps) {
  const colorType: any | null = {
    normal: "bg-stone-400",
    fighting: "bg-amber-900",
    flying: "bg-sky-300",
    poison: "bg-fuchsia-500",
    ground: "bg-amber-800",
    rock: " bg-amber-200",
    bug: "bg-lime-400",
    ghost: "bg-fuchsia-950",
    steel: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-300",
    psychic: "bg-pink-700",
    ice: "bg-blue-300",
    dragon: "bg-indigo-500",
    dark: "bg-black",
    fairy: "bg-fuchsia-300",
    stellar: "bg-teal-600",
    unknown: "bg-cyan-950",
  };
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
    <article
      className="bg-white rounded-full h-55 w-55 flex flex-col items-center justify-center shadow-lg font-extrabold capitalize bg-am
    transform transition-transform duration-200 ease-in-out hover:scale-110 motion-reduce:transform-none cursor-pointer 
    group gap-0.5"
    >
      <header className="flex justify-center">
        <img
          className="object-contain group-hover:scale-115 pixelated"
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"]["animated"]
              .front_default
          }
          alt=""
        />
      </header>
      <span className="text-gray-300 text-sm">#{pokemon?.id}</span>
      <h3 className="text-lg">{pokemon?.name}</h3>
      <ul className="flex gap-3 justify-center text-sm py-2">
        {pokemon?.types.map((type: any) => (
          <li
            className={`p-2 rounded-md px-2 text-white text-outline ${
              colorType[type.type.name]
            }`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
