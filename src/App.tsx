import React from 'react';
import './App.css';
import Description from './components/description';

function App() {
  /*
  const [contador, setContador] = React.useState(1);

  function aumentar(){
    console.log("Entra a la función aumentar");
    setContador(contador + 1);
  }
  */

  return (
    <div className='App'>
      <div className='Description'>
        <Description label='Aqui va la descripción'></Description>
      </div>
    </div>

  );
}

export default App;
