import React, {useEffect, useState} from "react";

import Boton from "./Boton";


export default function Temporizador(){
    const [contadorTiempo,setContadorTiempo]=useState(0);
    const inicio =()=>{
      window.myTimer = setInterval(() => {
        setContadorTiempo((contadorTiempo) => contadorTiempo + 1);
      }, 1000);
    }                  
    const alto = () =>{
      clearInterval(window.myTimer);

    }
    const reiniciar = () =>{
      clearInterval(window.myTimer);
      setContadorTiempo(0);
    }
    return(        
        <div className="contendedor-tiempo">                          
            <h2>{Math.trunc(contadorTiempo / 60)} minutos y {contadorTiempo % 60} segundos</h2>            
            <div className="contenedor-botones">
              <Boton
                claseBoton="boton-start"
                textoBoton="Start"
                funcionBoton={inicio}              
              />
              <Boton 
                claseBoton="boton-stop"
                textoBoton="Stop"
                funcionBoton={alto}
              />       
              <Boton
                claseBoton="boton-reset"
                textoBoton="Reset"
                funcionBoton={reiniciar}
              />
            </div>
            
        </div>
    );
}