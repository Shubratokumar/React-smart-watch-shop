import React from 'react';
import './Cart.css';

const Cart = ({product}) =>{
    const {name, image} = product;
    return (
        <div className='product-container'>
                <img src={image} alt="" /> 
                <h4>{name}</h4>   
        </div>
    );
};

export default Cart;