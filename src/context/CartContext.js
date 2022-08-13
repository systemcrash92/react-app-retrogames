
import { useState,createContext} from "react"


export const CartContext = createContext()

export const CartContextProvider = ({ children })=>{
    //variables
            const [CartInfo,setCart] = useState([]);
           
            
    
    

    //Funciones
    const addItem = (productToAdd)=>{
        if (!isInCart(productToAdd.id)) {
            setCart([...CartInfo,productToAdd])
        }else{
            
            const cartUpdated = CartInfo.map(prod => {
                if (prod.id === productToAdd.id) {
                    
                    const productUpdated = {
                        ...prod,
                        quantity:productToAdd.quantity
                    }
                    
                    return productUpdated
                }else{
                    return prod
                }
            })
            setCart(cartUpdated)

          
        }
        
        
    }
    
    const getQuantity=()=>{
        let accu =0
        CartInfo.forEach(prod =>{
            accu +=prod.quantity
        })
        return accu
    }
     
   const  isInCart =(id)=>{//check si esta en el carro

            return CartInfo.some(prod=> prod.id === id)

   }
   const clearCart = ()=>{//Limpio el carrito

    setCart([])

   }

   const getProductQuantity = (id) =>{
    const product =  CartInfo.find(prod => prod.id === id)

        if (product){
            return product.quantity
        }else{
            return 1
        }
   }



   const  removeItem = (id)=>{// remuevo en elemento del carrito
    const CartWhitOutitem = CartInfo.filter(prod => prod.id !== id)
    setCart(CartWhitOutitem)
   }
    return(
        <CartContext.Provider value={[addItem,isInCart,removeItem,clearCart,getQuantity,getProductQuantity,CartInfo]}>
            {children}
        </CartContext.Provider>
    )
}



