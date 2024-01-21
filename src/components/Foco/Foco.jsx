import React, {useState} from 'react'
import "./foco.css"

const Foco = () => {

    // const [nombre,setEstado] = useState(valorInicial)
    const [encendido,setEncendido] = useState(null)

    const cambiarEstado = ()=> {
        setEncendido(!encendido)
    }

  return (
    <div className={`cuadro ${encendido ? "amarillo" : ""}`}>
        <button onClick={cambiarEstado}>

            {encendido ? "Apagar" : "Encender"}

        </button>

    </div>
  )

}

export default Foco