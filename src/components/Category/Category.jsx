import './Category.css';
import { useEffect,useState } from 'react';
import {getDocs,collection} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import {Link} from 'react-router-dom'
import '../ItemListContainer/StyleItemList.css'


const CategoryContainer = ()=>{

    const [Games,SetGames]= useState([])
    const [valueS,setValueS] = useState('Bullethell')
    const [isLoading,SetisLoading] = useState(true)
    
    const filterGames = (category)=>{
        const value = Games.filter(prod => prod.category === category)

        return value



    }
    
        const changestate = (e)=>{
           setValueS(e.target.value)
           
        }

        useEffect(() => {
            getDocs(collection(db,'products')).then(response=>{
                    
                    const products = response.docs.map(doc =>{
                        return {id:doc.id, ...doc.data()}
                        
                    })
                    SetGames(products) 
                    SetisLoading(false)
                    
            })
        
        }, [])
        //loading Section
        if (isLoading) {
            return(
                <div className="Loading-container">
                <img src="/images/rotate_loading.png" alt="IMG" />
                 </div>
            )
        }


    return(
        <div className="category-container">

            <div className=" input-container">
                <h1>CATEGORY</h1>   
                <select value={valueS} onChange={changestate} name="Category" id="Category">
                {
                    Games.map(game =>{

                        return(
                            <option key={game.id}  value={game.category}>{game.category}</option>
                        )

                    })


                }
                </select>
                {
                    filterGames(valueS).map(producto =>{

                        return (

                            <div key={producto.id} className='card'> 
                            <h1>{producto.name}</h1>
                            <img src={producto.img} alt="img"/>
                            <h2>Price {producto.price}</h2>
                            <Link className='btn-description' to={`/GamesList/ItemDetail/${producto.id}`}>Description</Link>
                            <h3>available stock {producto.stock}</h3>
                        
                        </div>
                        )


                    })
                    

                }
            </div>

        </div>


    )

}



export default CategoryContainer