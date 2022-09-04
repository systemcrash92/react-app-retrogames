
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CategoryContainer from "./components/Category/Category";
import CartContainer from "./components/CartContainer/CartContainer";
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {CartContextProvider} from './context/CartContext'




function App(){
    
    
    

 return(
     <div className="App">
         <CartContextProvider>
             <BrowserRouter>
                 <Navbar />
                 <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/GamesList" element={<ItemListContainer greeting="RETRO GAMES FOREVER" />} />
                     <Route path="/GamesList/ItemDetail/:gameID" element={<ItemDetailContainer />} />
                     <Route path="/Cart" element = {<CartContainer/>}/>
                     <Route path="/GameList/Category" element = {<CategoryContainer/>}/>
                     
                     
                 </Routes>
             </BrowserRouter>

         </CartContextProvider>
         <Footer/>


     </div>
)


}

export default App;