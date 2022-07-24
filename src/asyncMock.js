const products =[
{
    id:'1',
    name:'BEATBUSTER',
    price :750,
    category:'Action',
    img: 'images/beatbuster.png',
    stock:5,
    description: 'blablablabalbal'
},
{
    id:'2',
    name:'DARIUS',
    price :900,
    category:'Bullethell',
    img: 'images/darius.png',
    stock:10,
    description: 'blablablabalbal'
},
{
    id:'3',
    name:'DragonQuest',
    price :900,
    category:'RPG',
    img: 'images/dragonquest1.png',
    stock:15,
    description: 'blablablabalbal'
}
]

export const getProduct =()=>{

    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })



}