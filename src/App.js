import './App.scss';
import Pokeapi from './components/Pokeapi/Pokeapi';
import PokeapiAxios from './components/Pokeapi/PokeapiAxios'
function App() {
  return (
    <div className="container">
      {/* <Pokeapi/> */}
      <PokeapiAxios/>
    </div>
  );
}

export default App;
