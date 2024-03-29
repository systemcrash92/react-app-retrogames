import { useEffect,useState } from 'react';
import './StyleItemList.css';
//import { getProduct } from '../../asyncMock';
import {Link} from 'react-router-dom'
import {getDocs,collection} from 'firebase/firestore'
import {db} from '../../services/firebase/index'




const ItemListContainer = (props)=>{
    const [Products,SetProducts]= useState([])
    const [isLoading,SetisLoading] = useState(true)
    

// pido la peticion a la api dsp de montar el componente
    useEffect(() => {
     
        
        
        getDocs(collection(db,'products')).then(response=>{
                
                const products = response.docs.map(doc =>{
                    return {id:doc.id, ...doc.data()}
                    
                })
                SetProducts(products)
                SetisLoading(false)
               
           
            
        })
    
    }, [])
   
//loading section
if(isLoading){
    return(
        <div className='Loading-container'>
            <img src="/images/rotate_loading.png" alt="IMG" />
            
        </div>
    )
    
}
  
    
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