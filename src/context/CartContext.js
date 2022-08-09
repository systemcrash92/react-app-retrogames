
import { useState,createContext} from "react"


export const CartContext = createContext()

export const CartContextProvider = ({ children })=>{
    //variables
            const [CartInfo,setCart] = useState([])
    
    
    

    //Funciones
   const addToCart = (item)=>{
    
            console.log('hola')
        if (!isInCart(item.id)) {
            
           

            setCart([...CartInfo,item])
            
            
             console.log(CartInfo)
          
            
        
        }else{
            console.log("q onda man")
        }

    
        
   }
   const  isInCart =(id)=>{//check si esta en el carro

            return CartInfo.some(prod=> prod.id === id)

   }
   const clearCart = ()=>{//Limpio el carrito

    setCart([])

   }



   const  removeItem = (id)=>{// remuevo en elemento del carrito
    const CartWhitOutitem = CartInfo.filter(prod => prod.id !== id)
    setCart(CartWhitOutitem)
   }
    return(
        <CartContext.Provider value={[addToCart,CartInfo,isInCart,removeItem,clearCart]}>
            {children}
        </CartContext.Provider>
    )
}



