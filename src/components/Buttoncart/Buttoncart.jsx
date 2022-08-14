import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'



const ButtonCart =()=>{


    const Quantity = useContext(CartContext)
  
    return (

        <Link  to={'/Cart'} className="Cart-logo"  type="button"> <img src="images/logocart.png" alt="" /> <h1>{Quantity[4]()}</h1> </Link>
        

    )


}

export default ButtonCart