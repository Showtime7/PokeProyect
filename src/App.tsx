import Pokemon from "./components/Pokemon";
import Side from "./components/Side";
import "./index.css";

function App() {
  return (
    <section>
      <main
        className="mx-w-[1400px] 
      mx-auto grid grid-cols-2 
      lg:grid-cols-[1fr_350px] 
      h-screen
       bg-gray-300
       font-black
       font-sans
       overflow-y-auto"
      >
        <Pokemon />
        <Side />
      </main>
    </section>
  );
}

export default App;
