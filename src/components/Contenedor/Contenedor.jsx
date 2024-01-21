import React from 'react'

const Contenedor = ({producto,precio,stock}) => {


  return (
    <div>
        
        <h2>{producto}</h2>
        <p>Precio= {precio}</p>
        <p>Stock= {stock}</p>

    </div>
  )
}

export default Contenedor