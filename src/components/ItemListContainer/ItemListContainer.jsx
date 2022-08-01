import { useEffect,useState } from 'react';
import './StyleItemList.css';
import { getProduct } from '../../asyncMock';
import {Link} from 'react-router-dom'




const ItemListContainer = (props)=>{
    const [Products,SetProducts]= useState([])
    

// pido la peticion a la api dsp de montar el componente
    useEffect(() => {
     
        getProduct().then(response=>{
            SetProducts(response)
           
            
        })
    
    }, [])

//loading section
  
    
    return (
        <div className="Container-Sectionitem">
            <h1 className='Tittle-GAMES'>GAMES</h1>
            <div className="Container-Item">
                
              {Products.map(producto =>{

                return(
                    <div key={producto.id} className='card'> 
                        <h1>{producto.name}</h1>
                        <img src={producto.img} alt="img"/>
                        <h2>Price {producto.price}</h2>
                        <Link className='btn-description' to={`/GamesList/ItemDetail/${producto.id}`}>Description</Link>
                        <h3>available stock {producto.stock}</h3>
                    
                    </div>
                )

              })}  

            </div>
        </div>

    )


}


export default ItemListContainer