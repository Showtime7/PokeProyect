import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );
      setPokemons(response.data.results);
      //console.log(response.data.results);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex">
          <input
            className="flex-1 outline-none text-center text-lg   rounded-full"
            type="text"
            placeholder="Busca tu pokemon aquí"
          />
          <button className=" shadow-md shadow-sky-700 h-10 w-10 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors">
            <IconSearch stroke={2} size={30} color="white" />
          </button>
        </div>
      </form>
      <PokemonList Pokemon={pokemons} />
    </section>
  );
}
