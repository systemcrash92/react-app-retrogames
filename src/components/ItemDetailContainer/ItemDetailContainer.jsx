import { useState,useEffect,useContext} from "react";
//mport { getProductsTest} from "../../asyncMock";
import ItemCount from "../ItemCount.js/ItemCount";
import "./ItemDetailContainer.css"
import {useParams} from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../services/firebase/index";

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
     
        
        getDoc(doc(db,'products',params.gameID)).then((response)=>{
            const product = {id:response.id,...response.data()}
           SetProduct(product)
            
            
           
                
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