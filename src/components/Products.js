
import Product from './Product';
import { useState, useEffect } from 'react';

const Products = (props) => {


const [products, setProducts] = useState([]);


    return (
        <div className="container  pb-24 m-10">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <Product myfun={props.myfun} />
            
           
        </div>
    )
}

export default Products;
