import React from 'react';
import './App.css';
  /*
import Button from './components/Button';
import {Pokemon} from './models/Pokemon';
import {PokeApi} from './api/PokeApi';
import PokemonComponent from './components/Pokemon'
import Display from './components/Display'; 
/*
function App() {
  const [contador, setContador] = React.useState(1);

  function aumentar(){
    console.log("Entra a la función aumentar");
    setContador(contador + 1);
  }

  */
  function reducir(){
    console.log("Entra a la función aumentar");
    setContador(contador - 1);
  }

  function nothing(){
    
  }

  return (
    <div className="App">
      <p>My pokemon: {contador}</p>
      
      <br>
      </br>
      <br>
      </br>
      <div>
        <Display onClick = {()=> nothing()} ></Display>
      </div>

      <Button label="Previous" onClick={()=>reducir()}></Button>
      <Button label="Next" color='green' onClick={()=>aumentar()}></Button>
      

    </div>

  );
}

export default App;

*/


function App() {
  const [pokemonNumber, setPokemonNumber] = React.useState<string|undefined>(undefined);
  const [pokemon,setPokemon]=React.useState<Pokemon|undefined>(undefined);
  const [loading,setLoading]=React.useState<boolean>(false);
  const [error,setError]=React.useState<string|undefined>(undefined);
  function buscar(){
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber).then((response)=>{
      setPokemon(response.data);
      setLoading(false);
    }).catch((error)=>{
      console.log(error)
      setLoading(false);
      setError("Pokemon no encontrado");
    });
  }
  return (
    <div className="App">
      <p>Hello World {pokemonNumber}</p>
      <input onChange={(event)=>{setPokemonNumber(event.target.value)}} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={pokemonNumber}></input>
      <Button label="Buscar" color='green' onClick={()=>buscar()}></Button>
      {loading && <p>Cargando...</p>}
      {(!loading && pokemon &&!error) && <>
        <PokemonComponent pokemon={pokemon}></PokemonComponent>
      </>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;