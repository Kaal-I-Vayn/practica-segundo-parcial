import React, {useState} from 'react';
export default function Boton({funcionBoton, claseBoton, textoBoton}){    

    return(        
            <button className={claseBoton} onClick={funcionBoton}>
                {textoBoton}
            </button>        
        
    );
};