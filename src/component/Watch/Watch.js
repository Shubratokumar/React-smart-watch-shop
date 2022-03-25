import React from 'react';
import './Watch.css';

const Watch = (props) => {
    console.log(props.image)
    const{name, price, image} = props.watch;
    return (
        <div className='watch-container'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <div className='watch-info'>
                <h2>{name}</h2>
                <p>Price : ${price}</p>
            </div>
            <div className="add-to-choose">
                <button>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Watch;