import { useState } from 'react'

const Login = () => {
  const [inputText, setInputText] = useState('')
  const [buttonText, setButtonText] = useState('Inicia sesion')

  const handleInputChange = (event) => {
    const newText = event.target.value
    setInputText(newText)
    setButtonText(newText)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Escribe un nuevo texto para el botón'
        value={inputText}
        onChange={handleInputChange}
      />
      <button>{buttonText}</button>
    </div>
  )
}

export default Login