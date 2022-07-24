
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css'
import ButtonCount from "./components/ItemCount.js/ItemCount";



function App(){
    // estado de secciones
    const [Section, setSection]= useState("HomeSection")
    

 return(
    <div className="App">
        <Navbar setSection={setSection} />
        {Section === "HomeSection" && <Home/>}
        {Section === "ItemList" && <ItemListContainer   greeting="RETRO GAMES FOREVER" />}
       





    </div>
)


}

export default App;