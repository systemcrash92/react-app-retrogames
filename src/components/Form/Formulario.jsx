import './Formulario.css'
import {useContext,useState} from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection,Timestamp,updateDoc,doc,getDocs,query,where,documentId,writeBatch} from 'firebase/firestore';
import { db } from '../../services/firebase';



const Formulario =()=>{
    const [orderDone,setOrderDone] = useState(false)
    const [loadingOrder,setLoadingOrder] = useState(false)
    const [idOrder,setidOrder] = useState('')
    const  ContextValues = useContext(CartContext)
    const showCart = ContextValues[6]
    const totalPrice = ContextValues[7]()
    
    
    
    
    const handleSubmit = async (evt)=>{
      evt.preventDefault()
      
    try{
        setLoadingOrder(true)
        const orderInfo ={
            buyer:{name:evt.target[0].value,phone:evt.target[1].value,email:evt.target[2].value},
            games:showCart,
            totalprice:totalPrice,
            date:Timestamp.fromDate(new Date())
          }
          
          
          const ids= showCart.map(prod=> prod.id)
          const prductsFromFirestore = await getDocs(query(collection(db,'products'),where(documentId(),'in',ids)))
          const {docs} = prductsFromFirestore
          const OutofStock =[]
          const batch = writeBatch(db)
    
          docs.forEach(doc =>{
            const infoDoc = doc.data()
            const stockDB= infoDoc.stock
            const gamesAdd = showCart.find(prod => prod.id === doc.id)
            const gamesQuantity = gamesAdd?.quantity
    
            if (stockDB >= gamesQuantity) {
                batch.update(doc.ref,{sotck:stockDB - gamesQuantity})
    
            }else{
                OutofStock.push({id:doc.id,...infoDoc})
            }
          })
       
          if (OutofStock.length === 0) {
            const orderRef= collection(db,'orders')
            const orderAdded = await addDoc(orderRef,orderInfo)
            batch.commit()
            setidOrder(orderAdded.id)
            ContextValues[3]()
          }else{
            console.log('hay productos fuera de stock')
          }
    }catch(error){
        console.log(error)
    }finally{
        setOrderDone(true)

        
    }
      
    }



          

        


    return(
        

        <div className='container-form'>
           { 
                !loadingOrder &&
           <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Enter your name'
                name='name'          
            />
            <input 
                type="text" 
                placeholder='phone number'
                name='phone'           
            />
            <input 
                type="text" 
                placeholder='Enter your email'
                name='email'         
            />
            
            <button type='submit'>SEND</button>
           </form>
            }
            {loadingOrder && !orderDone && <h1 className='loading'>LOADING</h1>}
            {orderDone && <h1 className='loading'>Thanks for your purchase Order id : {idOrder}</h1> }
        </div>
        
    )


}


export default Formulario