import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
const Product = (props) => {
   
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const [cartData, setCartData] = useState([]);const cardData=[

];
const addToCart = (event,index) => {
    console.log(index.toString());
    cardData.push(array[index]);
    console.log(cardData);
    console.log(cardData.length);
    
    let _cart = {...cart}; // { items: {}}
    if (!_cart.items) {
        _cart.items = {}
    }
    if (_cart.items[index.toString()]) {
        _cart.items[index.toString()] += 1;
    } else {
        _cart.items[index.toString()] = 1;
    }

    if(!_cart.totalItems) {
        _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
        setIsAdding(false);
    }, 1000);
    //
    // const cart = {
    //     items: {
    //         '608c2960e165f6137f02b552': 2,
    //         '608c28e8e165f6137f02b550': 3
    //     },
    //     totalItems: 5
    // }


}

const array=[
    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },
    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    }, {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },

    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },
    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    }, {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },
    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },
    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    }, {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },
    {
        name:'pizza 1',
        price:'700',
        img:'/images/peproni.png',
        size:'large'

    },

];
    return (
<div>
<div className="grid grid-cols-5 my-8 gap-24">

        {array.map((pizza ,index)=> (
            <div className='w-44'>
                        <img src={pizza.img} alt="logo" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{pizza.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{pizza.size}</span>
            </div>
          
            <div className="flex justify-between items-center mt-4">
                <span>₹ {pizza.price}</span>
                <button disabled={isAdding} onClick={(e) => { addToCart(e,index) }} className={`${  'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{}</button>
            </div>
        </div>
    ))}
    </div>
    </div>
    )
}

export default Product;
