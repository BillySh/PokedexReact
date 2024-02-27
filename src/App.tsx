import React from 'react';
import './App.css';
  /*
import Button from './components/Button';

import Display from './components/Display'; 

import Description from './components/description';

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