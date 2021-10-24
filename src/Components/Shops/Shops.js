import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Shop.css'

const Shops = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`./productdata.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className='shop-section'>

            </div>
            <h1 className='section-title'>Our Products</h1>
            <div className='products'>
            {
                products.map(product => <Shop
                key = {product.id}
                product={product}
                ></Shop> )
            }
            </div>
        </div>
    );
};

export default Shops;