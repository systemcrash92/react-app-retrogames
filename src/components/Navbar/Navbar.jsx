
import './Navbar.css';
import ButtonCart from "../Buttoncart/Buttoncart";



const Navbar = ({setSection}) =>{
    
    return  (
        <header>
            <button type="button" className="btn-navbar" onClick={()=>{setSection("HomeSection")}} >HOME</button>
            <button onClick={()=>setSection("ItemList") } type="button" className="btn-navbar">GAMES</button>
            <ButtonCart /> 
        </header>

      
        


    )


}

export default Navbar
