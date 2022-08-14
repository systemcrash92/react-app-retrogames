import "./CartContainer.css"
import {useContext} from "react";
import { CartContext } from "../../context/CartContext";




const CartContainer = () =>{

    const  ContextValues = useContext(CartContext)
    const showCart = ContextValues[6]
   
    
    
   

    return (

        <div className="container-main">
            <div className="container-cards">
            {showCart.length && <h1 className="empty"> CART </h1> }
                    {
                        
                        
                              showCart.map(game =>{
                           
                            return(
                                <div key={game.id} className="cart-card">
                                    <h1>{game.name} </h1>
                                    <h2>Quantity: {game.quantity}</h2>
                                    <h2>${game.price}</h2>
                                    <h2> Subtotal: ${game.price*game.quantity}</h2>
                                    <button onClick={()=>ContextValues[2](game.id)} >Remove</button>
                                </div>   
                
                            )
                        })
                       
                    }   
                     {!showCart.length && <h1 className="empty">the cart is empty</h1>}   
                     {showCart.length && <button className="btn-makeorder"> Make Order </button> }      
             </div>   
        </div>
    )






}


export default CartContainer