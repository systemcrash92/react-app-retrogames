
import { useState } from 'react'
import './ItemCount.css'



const ButtonCount = ()=>{
const [Counter,setCounter] = useState(0)

const Increment = ()=>{setCounter(Counter + 1)}
const Decrement =()=>{setCounter(Counter - 1)}

return (
    <div btn-container>
       <div className='LabelCount'>
            <button type='button' onClick={Decrement}>-</button>
            <h1>{Counter}</h1>
            <button type='button' onClick={Increment}>+</button>
        </div> 
        <button className='btn-addtocart' typeof='button'>Agregar al carrito</button>  


    </div>

)


}


export default ButtonCount 