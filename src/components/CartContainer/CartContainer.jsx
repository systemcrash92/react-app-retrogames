import "./CartContainer.css"
import {useContext,useState} from "react";
import { CartContext } from "../../context/CartContext";
import Formulario from "../Form/Formulario";




const CartContainer = () =>{
    const [bisFormWidget,setFormWidget] = useState(false)
    const  ContextValues = useContext(CartContext)
    const showCart = ContextValues[6]
    const totalPrice = ContextValues[7]()


    return (

        <div className="container-main">
            <div className="container-cards">
            {showCart.length &&  <h1 className="empty"> CART </h1> }
                    {
                        !bisFormWidget &&
                        
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
                     {!showCart.length &&!bisFormWidget&& <h1 className="empty">the cart is empty</h1>} 
                     {showCart.length && !bisFormWidget && <h1 className="total"> Total price: ${totalPrice} </h1>}  
                     {showCart.length && !bisFormWidget && <button onClick={()=>{setFormWidget(true)}} className="btn-makeorder"> Make Order </button> }
                     {bisFormWidget && <Formulario/>}      
             </div>   
        </div>
    )






}


export default CartContainer