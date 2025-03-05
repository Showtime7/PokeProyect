import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import PokemonList from "./PokemonList";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const valorInicial = 50;
export default function Pokemon() {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [limit, setLimit] = useState(valorInicial);

  const pokeName = searchPokemon
    ? pokemons.filter((poke) =>
        poke.name.toLowerCase().includes(searchPokemon.toLowerCase())
      )
    : pokemons;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchPokemon((e.target as HTMLFormElement).searchPokemon.value);
    setLimit(valorInicial);
  };

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const loadMorePokemons = () => {
    setLimit((prevLimit) => prevLimit + 50);
  };

  const [setRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        loadMorePokemons();
      }
    },
  });

  useEffect(() => {
    fetchPokemon();
  }, [limit]);

  return (
    <section className="p-4 py-5">
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-4 flex">
          <input
            className="flex-1 outline-none text-center text-lg rounded-full"
            type="text"
            placeholder="Busca tu pokemon aquí"
            name="searchPokemon"
          />
          <button className="shadow-md shadow-sky-700 h-10 w-10 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors">
            <IconSearch stroke={2} size={30} color="white" />
          </button>
        </div>
      </form>
      <PokemonList Pokemon={pokeName.slice(0, limit)} />
      <div ref={setRef} className="flex justify-center p-4"></div>
    </section>
  );
}
