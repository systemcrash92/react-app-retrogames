const products =[
{
    id:'1',
    name:'BEATBUSTER',
    price :750,
    category:'Action',
    img: '/images/beatbuster.png',
    stock:5,
    description: 'Beast Busters is an on-rails shooter horror game released by SNK for arcades in 1989. It was the first light-gun shooter video game for three players. Ports were released for the Amiga and Atari ST in 1990.'
},
{
    id:'2',
    name:'DARIUS',
    price :900,
    category:'Bullethell',
    img: '/images/darius.png',
    stock:10,
    description: 'Darius Gaiden is a video game of the Matamarcianos genre by the Taito company published, originally as an arcade, in 1994. It is the fifth title and third arcade in the Darius series.'
},
{
    id:'3',
    name:'DragonQuest',
    price :900,
    category:'RPG',
    img: '/images/dragonquest1.png',
    stock:15,
    description: 'Dragon Quest II, known as Dragon Warrior II in North America, is a role-playing video game developed by Chunsoft and published by Enix in 1987 for the MSX and Nintendo Entertainment System as part of the Dragon Quest series.l'
}
]

export const getProduct =()=>{

    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(products)
        }, );
    })



}

export const  getProductsTest = (productId) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products.find((product)=>(product.id === productId)))
        }, )
    }
    )
}

