import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Contenedor from './components/Contenedor/Contenedor'
import Foco from './components/Foco/Foco'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const productos = [
    {
      "producto": "Cuadro",
      "precio": 1000,
      "stock": 9
    },
    {
      "producto": "Espejo",
      "precio": 2000,
      "stock": 5
    },
    {
      "producto": "Vaso",
      "precio": 5000,
      "stock": 6
    }
  ]

  return (
    <>

      <NavBar/>

      {}

      <ItemListContainer greeting={"Bienvenidos a mi e-commerce"}/>


    </>
  )
}

export default App
