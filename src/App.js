import React from "react";
import Navbar from "./Componentes/Header/NavBar"
import ItemListContainer from "./Componentes/Header/Content/ItemListContainer";

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer />
    </>
  )
}
//Fragment es una etiqueta HTML sin nada, vacia.
export default App;
