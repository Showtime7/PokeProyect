interface SideProps {
  isSideOpen: boolean;
  setIsSideOpen: (isOpen: boolean) => void;
  selectedPokemon: any;
}

export default function Side({
  isSideOpen,
  setIsSideOpen,
  selectedPokemon,
}: SideProps) {
  if (!isSideOpen) return null;

  return (
    <aside className="fixed top-0 right-0 h-screen w-96 bg-white shadow-lg p-6 overflow-y-auto">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={() => setIsSideOpen(false)}
      >
        ✕
      </button>
      {selectedPokemon && (
        <div>
          <h2 className="text-2xl font-bold capitalize">
            {selectedPokemon.name}
          </h2>
          <p className="text-gray-500">#{selectedPokemon.id}</p>
          <img
            src={
              selectedPokemon.sprites.versions["generation-v"]["black-white"][
                "animated"
              ].front_default
            }
            alt={selectedPokemon.name}
            className="w-32 h-32 mx-auto"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Types:</h3>
            <ul className="flex gap-2">
              {selectedPokemon.types.map((type: any) => (
                <li
                  key={type.type.name}
                  className="px-3 py-1 rounded-full text-white bg-blue-500"
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Stats:</h3>
            <ul>
              {selectedPokemon.stats.map((stat: any) => (
                <li key={stat.stat.name} className="flex justify-between">
                  <span className="capitalize">{stat.stat.name}:</span>
                  <span>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
}
