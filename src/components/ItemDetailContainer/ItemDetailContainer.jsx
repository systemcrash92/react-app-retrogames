import { useState,useEffect,useContext} from "react";
import { getProductsTest} from "../../asyncMock";
import ItemCount from "../ItemCount.js/ItemCount";
import "./ItemDetailContainer.css"
import {useParams} from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'


const ItemDetailContainer =()=>{

    const [Product,SetProduct]= useState({})
    const params = useParams()
    const [Quantity,SetQuantity] = useState(0)

    const  ContextValues = useContext(CartContext)

    const quantityAdded = ContextValues[5](Product.id)
    
    
    const addQuantity =(quantity)=>{
        SetQuantity(quantity)
        
        ContextValues[0]({...Product,quantity})
        
    }
    
    

    useEffect(() => {
     
        getProductsTest(params.gameID).then((response)=>{
            
            SetProduct(response)
            
            
           
                
        })
    
    },[params.gameID])

    return(
        <div  className="Container-Detail">
        <img className="img-Item" src={Product.img} alt={Product.name}/>
        <div className="Description-Container">
           <p>{Product.description}</p>
           <h2>Price  ${Product.price}</h2>
           {Quantity > 0 ? <Link to={'/Cart'} className="btn-gotocart">Go to cart</Link>:<ItemCount addQuantity={addQuantity} initial={quantityAdded}  MaxStock={Product.stock} />}
           
        </div>

    </div>


    )



}

export default ItemDetailContainer