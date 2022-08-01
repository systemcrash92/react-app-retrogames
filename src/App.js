
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes,Route} from 'react-router-dom'



function App(){
    // estado de secciones
    
    

 return(
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element ={<Home/>}/> 
                <Route path="/GamesList"element={<ItemListContainer   greeting="RETRO GAMES FOREVER" />}/>
                <Route path="/GamesList/ItemDetail/:gameID" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>





    </div>
)


}

export default App;