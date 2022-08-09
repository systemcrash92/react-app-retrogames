
import { useState } from 'react'
import './ItemCount.css'



const ItemCount = ({ MaxStock, addQuantity }) => {
    const [Counter, setCounter] = useState(0)





    const Increment = () => {

        setCounter(Counter + 1)
        if (Counter >= MaxStock) {
            setCounter(MaxStock)
        }

        return Counter

    }
    const Decrement = () => {
        setCounter(Counter - 1)
        if (Counter <= 1) {
            setCounter(1)
        }
        return Counter
    }

    return (
        <div className='btn-container'>
            <div className='LabelCount'>
                <button type='button' onClick={Decrement}>-</button>
                <h1>{Counter}</h1>
                <button type='button' onClick={Increment}>+</button>
            </div>
            <button className='btn-addtocart' onClick={() => { addQuantity(Counter)}}>Add to cart</button>


        </div>

    )


}


export default ItemCount 