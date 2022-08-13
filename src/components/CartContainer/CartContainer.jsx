import "./CartContainer.css"
import {useContext} from "react";
import { CartContext } from "../../context/CartContext";




const CartContainer = () =>{

    const  ContextValues = useContext(CartContext)
    const showCart = ContextValues[6]
   

    return (

        <div className="container-main">
            <div className="container-cards">
                
                    {
                        showCart.map(game =>{


                            return(
                                <div className="cart-card">
                                    <h1>{game.name} </h1>
                                    <h2>Quantity: {game.quantity}</h2>
                                    <h2>${game.price}</h2>
                                    <h2> Subtotal: ${game.price*game.quantity}</h2>
                                    <button>Remove</button>




                                </div>   
                            )
                        })
                    }               
             </div>   
        </div>
    )






}


export default CartContainer