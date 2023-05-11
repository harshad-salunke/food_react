import React from 'react';
import Products from '../components/Products';
const handleChildClick = () => {
    console.log('Child component clicked');
  };
  
const ProductsPage = () => {
  
    return (
        <div>
            <Products myfun={handleChildClick} />
        </div>
    )
}

export default ProductsPage;
