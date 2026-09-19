import React from 'react';
import ProductCard from '../components/ProductCard';


const getProduct = async () => {
    const res = await fetch('http://localhost:5000/products', {
        cache:"force-cache" })
    return res.json();
}


const ProductPage =async () => {

  const products = await getProduct();

    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className='grid grid-cols-3 gap-3'>
                {
                    products.map(product => <ProductCard
                    key={product.id}
                    product= {product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductPage;