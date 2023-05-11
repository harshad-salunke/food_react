import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
    let total = 0;
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);

    const [priceFetched, togglePriceFetched] = useState(false);

    useEffect(() => {
        if (!cart.items) {
            return;
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


        console.log(cart.items);
        const map = new Map(Object.entries(cart.items));
        console.log(map.keys())
       
        let keys = Array.from( map.keys() );
        for(let i=0;i<keys.length;i++){
            let ii=parseInt(keys[i]);
            products.push(array[ii]);
        }
        
        setProducts(products);
        togglePriceFetched(true);

      
    }, [cart, priceFetched]);

    const getQty = (productId) => {
        return cart.items[productId];
    }

 

    const getSum = (price) => {
        const sum = price;
        total += sum;
        return sum;
    }

  

    const handleOrderNow = () => {
        window.alert('Order placed succesfully!');
        setProducts([]);
        setCart({});
    }

    return (
        !products.length
        ? <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" alt="" />
        :
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
                {
                    products.map((product,index )=> {
                        return (
                            <li className="mb-12" key={product._id}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="h-16" src={product.img} alt="" />
                                    <span className="font-bold ml-4 w-48">{ product.name }</span>
                                </div>
                                <div>
                                   <b className="px-4">{  }</b>
                                </div>
                                <span>₹ { getSum( product.price) }</span>
                                <button onClick={() => {
                                     products.splice(index,1);
                                     console.log(products);
                                     setProducts(products);
                                  }} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b> ₹ { total }
            </div>
            <div className="text-right mt-6">
                <button onClick={handleOrderNow} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
    )
}

export default Cart;
