import { useState } from 'react';
import GifExpertApp from '../GifExpertApp';

const PruebaEnvio = (unaPropiedadDelComponente) => {
  console.log()
  const [valorInput, setvalorInput] = useState('Hola mundo')

  const cambioEvento = (eventChangeInput) => {
    
    
    setvalorInput(eventChangeInput.target.value);
    console.log(valorInput)
    
  }
  const enter = (event) => {

    event.preventDefault();
    console.log(event.target.value);

  }
  return (
    <form onSubmit={(event) => enter(event)}>
      <div>PruebaEnvio</div>
      <input
        type='text'
        placeholder='Agrega Categoria'
        value={valorInput}
        onChange={eventChangeInput => cambioEvento(eventChangeInput)}
      />
    </form>
  )
}

/* const agregarCategoria = ({ unaPropiedadDelComponente }) => {
  console.log(GifExpertApp)
  return (
    <form>
      <div>Prueba Envio</div >
      <input 
      type='text'
      placeholder='Agrega Categoria'
      value={valorInput}
      onChange={event =>PruebaEnvio(event)}
      />
    </form>

  )
}
 */
export default PruebaEnvio