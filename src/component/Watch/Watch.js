import React from 'react';
import './Watch.css';
import { FaShoppingCart } from 'react-icons/fa';

const Watch = ({watch, handleAddToCart}) => {
    const{name, price, image} = watch;
    return (
        <div className='watch-container'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <div className='watch-info'>
                <h2>{name}</h2>
                <p>Price : ${price}</p>
            </div>
                <button onClick={() => handleAddToCart(watch)} className="add-to-cart">
                    <p className=''>Add To Cart</p>
                    <FaShoppingCart className='icon'></FaShoppingCart>
                </button>
        </div>
    );
};

export default Watch;