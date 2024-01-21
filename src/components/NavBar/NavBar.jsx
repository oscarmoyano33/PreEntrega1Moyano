import React from "react"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return(

        <>

           
            <h1>EMPRESA</h1>

            <ul>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                <a>Productos</a>
                </li>
                <li>
                <a>quienes somos</a>
                </li>
                <li>
                <a>Contacto</a>
                </li>
                
            </ul>

            
            <CartWidget/>
        </>

    )
}

export default NavBar;