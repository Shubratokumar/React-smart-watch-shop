import { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Shop.css';

const Shop = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, []);
    
    return (
        <div className='shop-container'>
            <div className='watches-container'>
                {
                    watches.map(watch => <Watch watch = {watch} key = {watch.id}></Watch>)
                }

            </div>
            <div className='cart-container'>
                <h2>This is cart container</h2>
            </div>
            
        </div>
    );
};

export default Shop;