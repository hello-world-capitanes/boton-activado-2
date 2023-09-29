import React, { useState } from 'react';

function CajaDeTexto({textoSuperior, setEstado, estado}) {
    
    const cambiarTexto = (event) => {
      setEstado(event.target.value);
    };
  
    return (
      <div>
        <p>{textoSuperior}</p>
        <input
          type="text"
          value={estado}
          onChange={cambiarTexto}
          placeholder="Escribe algo..."
        />
      </div>
    );
  }
  
  export default CajaDeTexto;