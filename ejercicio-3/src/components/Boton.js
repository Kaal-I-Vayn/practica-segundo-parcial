import React from 'react';
import '../styles/Boton.css'

export default function Boton({funcionClick,claseBoton}){
    return(
        <button className="boton-mostrar" onClick={funcionClick}>Ocultar/Mostrar</button>
    )
}