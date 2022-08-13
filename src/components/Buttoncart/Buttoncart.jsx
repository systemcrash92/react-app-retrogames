import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const ButtonCart =()=>{


    const Quantity = useContext(CartContext)
  
    return (

        <button  className="Cart-logo"  type="button"> <img src="images/logocart.png" alt="" /> <h1>{Quantity[4]()}</h1> </button>
        

    )


}

export default ButtonCart