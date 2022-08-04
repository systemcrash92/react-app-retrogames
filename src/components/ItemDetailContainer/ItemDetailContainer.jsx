import { useState,useEffect } from "react";
import { getProductsTest } from "../../asyncMock";
import ItemCount from "../ItemCount.js/ItemCount";
import "./ItemDetailContainer.css"
import {useParams} from 'react-router-dom'



const ItemDetailContainer =()=>{

    const [Product,SetProduct]= useState([])
    const params = useParams()
    const [Quantity,SetQuantity] = useState(0)
    
    const addQuantity =(value)=>{
        SetQuantity(value)
         
    }
    
    

    useEffect(() => {
     
        getProductsTest(params.gameID).then((response)=>{
            
            SetProduct(response)
           
                
        })
    
    },[params.gameID,Quantity])

    return(
        <div  className="Container-Detail">
        <img className="img-Item" src={Product.img} alt={Product.name}/>
        <div className="Description-Container">
           <p>{Product.description}</p>
           <h2>Price  ${Product.price}</h2>
           {Quantity > 0 ? <button  className="btn-gotocart">Go to cart</button>:<ItemCount addQuantity={addQuantity}  MaxStock={Product.stock} />}
           
        </div>

    </div>


    )



}

export default ItemDetailContainer