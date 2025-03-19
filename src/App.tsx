import { useState } from "react";
import Pokemon from "./components/Pokemon";
import Side from "./components/Side";
import "./index.css";

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  return (
    <section>
      <main
        className="mx-w-[1400px] 
      mx-auto grid grid-cols-2 
      lg:grid-cols-[1fr_350px] 
      h-screen
       bg-gray-50
       overflow-y-auto"
      >
        <Pokemon
          setIsSideOpen={setIsSideOpen}
          setSelectedPokemon={setSelectedPokemon}
        />
        <Side
          isSideOpen={isSideOpen}
          setIsSideOpen={setIsSideOpen}
          selectedPokemon={selectedPokemon}
        />
      </main>
    </section>
  );
}

export default App;
