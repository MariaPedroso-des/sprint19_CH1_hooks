import useFecthCharacters from './hooks/useFetchCharacters'
import Character from './components/Character';

import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const { character: pokemon, error: errorPokemon, loading: loadingPokemon } = useFecthCharacters(urlPokemon) // character me lo traigo con un destructuring
  const { character: rick, error: errorRick, loading: loadingRick } = useFecthCharacters(urlRick)
  
  return (
   <>
    <Character 
      character={pokemon}
      error={errorPokemon}
      loading={loadingPokemon}
      name={pokemon?.name}
      img={pokemon?.sprites?.front_default}
    />
    <Character 
      character={rick}
      error={errorRick}
      loading={loadingRick}
      name={rick?.name}
      img={rick?.image}
    />
   </>
  );
}

export default App;


//inspector, Network, probar que sea 3G. Probamos conexiones para ver el cargando por ejemplo