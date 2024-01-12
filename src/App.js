import './App.css';
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <div className='App-pokemon'>
        {Pokedex.map(p => <Pokecard
          name={p.name}
          type={p.type}
          id={p.id}
          exp={p.base_experience}
        />)}
      </div>

    </>
  );
}

export default App;
