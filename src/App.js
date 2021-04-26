import { PokemonList } from './component/PokemonList'
import './App.scss';


export const App = () => {
  return (
    <main className="app">
      <h1 className="app__title">Pokedex</h1>
      <div className="app__body">
        <PokemonList />
      </div>
    </main>
  );
}

export default App;
