import React from 'react';
import './Randomitem.css'

const Randomitem = ({random}) => {
    const {name , image} = random;
    return (
        <div className='random-item'>
            <img src={image ? image : ''} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Randomitem;