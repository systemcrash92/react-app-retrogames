import { useState,useEffect } from "react";
import { getProductsTest } from "../../asyncMock";
import ItemCount from "../ItemCount.js/ItemCount";
import "./ItemDetailContainer.css"
import {useParams} from 'react-router-dom'



const ItemDetailContainer =()=>{

    const [Product,SetProduct]= useState([])
    const params = useParams()
    
    
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
           <ItemCount MaxStock={Product.stock} />
           
        </div>

    </div>


    )



}

export default ItemDetailContainer