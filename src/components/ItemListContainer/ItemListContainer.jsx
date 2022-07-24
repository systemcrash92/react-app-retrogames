import { useEffect,useState } from 'react';
import './StyleItemList.css';
import { getProduct } from '../../asyncMock';



const ItemListContainer = (props)=>{
    const [Products,SetProducts]= useState([])
    const [Loading,setLoading]= useState(true)

// pido la peticion a la api dsp de montar el componente
    useEffect(() => {
     
        getProduct().then(response=>{
            SetProducts(response)
            setLoading(false)
            
        })
    
    }, [])

//loading section
    if (Loading) {
        return (
            <div className='Loading-container'>
                <img src="images/rotate_loading.png" alt="loading" />
            </div>

        )
    }

    
    return (
        <div className="Container-Sectionitem">
            <h1 className='Tittle-GAMES'>GAMES</h1>
            <div className="Container-Item">
                
              {Products.map(producto =>{

                return(
                    <div className='card'> 
                        <h1>{producto.name}</h1>
                        <img src={producto.img} alt="img"/>
                        <h2>Price {producto.price}</h2>
                        <button type='button'>Description</button>
                        <h3>available stock {producto.stock}</h3>
                    
                    </div>
                )

              })}  

            </div>
        </div>

    )


}


export default ItemListContainer