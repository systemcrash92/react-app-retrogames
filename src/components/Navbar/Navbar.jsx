


import ButtonCart from "../Buttoncart/Buttoncart";
import {Link} from 'react-router-dom'

import './Navbar.css';



const Navbar = ({setSection}) =>{

   
    
    return  (
        <header>
            <Link to='/' className="btn-navbar">HOME</Link>
            <Link to='/GamesList' className="btn-navbar">GAMES</Link>
            <Link to='/GameList/Category' className="btn-navbar" > CATEGORY</Link>

            <ButtonCart /> 
        </header>

      
        


    )


}

export default Navbar
