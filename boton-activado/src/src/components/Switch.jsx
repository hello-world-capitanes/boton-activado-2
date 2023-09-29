import { useState } from 'react'
import CajaDeTexto from './CajaDeTexto/CajaDeTexto'

const Switch = () => {
  const [state, setState] = useState(false)
  const [textoActivado,setTextoActivado] = useState("Activado")
  const [textoDesactivado,setTextoDesactivado] = useState("Desactivado")

  const handleClick = () => {
    // setState(!state) // invierte el estado
    setState((prevState) => !prevState) // ambas sirven
  }

  return (
    <>
      <div className={`switch ${state ? 'on' : 'off'}`}>
        <p>{state ? `${textoActivado}` : `${textoDesactivado}`}</p>
        <button onClick={() => handleClick()}>ClickMe!</button>
        <button>Cambiar color de fondo</button>
      </div>
      <CajaDeTexto  textoSuperior="Texto Activado" setEstado={setTextoActivado} estado={textoActivado}/>
      <CajaDeTexto  textoSuperior="Texto Desactivado" setEstado={setTextoDesactivado} estado={textoDesactivado}/>
    </>
  )
}

export default Switch
