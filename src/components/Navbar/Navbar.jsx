
import './Navbar.css';
import ButtonCart from "../Buttoncart/Buttoncart";
import {Link} from 'react-router-dom'



const Navbar = ({setSection}) =>{
    
    return  (
        <header>
            <Link to='/' className="btn-navbar">HOME</Link>
            <Link to='/GamesList' className="btn-navbar">GAMES</Link>
            <ButtonCart /> 
        </header>

      
        


    )


}

export default Navbar
