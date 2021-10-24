import React from 'react';
import './Shop.css'

const Shop = (props) => {
    const {price, img, productDetails, productName} = props.product;
    return (
        <div className='shop-products'>
            <img src={img} alt="" />
            <h4>{productName} </h4>
            <p>{productDetails} </p>
            <p>Price: ${price} </p>
            <button className='buyNowBtn'>Buy Now</button>
        </div>
    );
};

export default Shop;