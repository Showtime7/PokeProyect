import PokePreview from "./PokePreview";

interface PokemonListProps {
  Pokemon: { name: string; url: string }[];
}
export default function PokemonList({ Pokemon }: PokemonListProps) {
  return (
    <section className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {Pokemon.map((pokemon) => (
        <PokePreview key={pokemon.url} pokemonURL={pokemon.url} />
      ))}
    </section>
  );
}
