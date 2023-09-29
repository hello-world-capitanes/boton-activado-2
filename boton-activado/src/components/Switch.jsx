import { useState } from 'react'

const Switch = () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    // setState(!state) // invierte el estado
    setState((prevState) => !prevState) // ambas sirven
  }

  return (
    <div className={`switch ${state ? 'on' : 'off'}`}>
      <p>{state ? 'Activado' : 'Desactivado'}</p>
      <button onClick={() => handleClick()}>ClickMe!</button>
      <button>Cambiar color de fondo</button>
    </div>
  )
}

export default Switch
