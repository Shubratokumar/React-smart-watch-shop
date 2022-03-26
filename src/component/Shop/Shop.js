import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './Shop.css';
import {BsShuffle} from 'react-icons/bs';
import {MdRemoveShoppingCart} from 'react-icons/md';
import Randomitem from '../Randomitem/Randomitem';

const Shop = () => {
    const [watches, setWatches] = useState([]);
    const [item, setItem] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, []);

    const handleAddToCart = (watch) => {
        let newCart;
        const exists = item.find(product => product.id === watch.id);

        if(!exists){
            if(item.length < 4){
                newCart = [...item, watch];
                setItem(newCart);
            }
            else{
                alert(`You cann't select more than 4 watch at a time !!!`)
            }
        }
        else{
            alert(`Opps!!! You selected same watch again.`)
        }  
    }

    const chooseOne = (items) => {
        const randomNum = Math.floor(Math.random() * items.length)
        const randomItem = items[randomNum];
        setRandom([randomItem]);
        setItem([]);       
    }

    const chooseAgain = () =>{
        setItem([]);
        setRandom([]);
    }
    
    return (
        <div className='shop-container'>
            <div className='watches-container'>
                {
                    watches.map(watch => <Watch handleAddToCart = {handleAddToCart} watch = {watch} key = {watch.id}></Watch>)
                }

            </div>
            <div className='choose-container'>
                <h2>Choose Smart watch :{item.length}</h2>
                    {
                        item.map(product => <Cart product = {product} key ={product.id}></Cart>)
                    }
                    {
                        random.map(random => <Randomitem random = {random} key = {random.id}></Randomitem>)                        
                    }
                <div className='btn'>
                    <button onClick={() => chooseOne(item)} className='btn-choose'>
                        <p>Choose one </p>
                        <BsShuffle className='icon'></BsShuffle>
                    </button> <br />
                    <button onClick = {chooseAgain} className='btn-remove'>
                        <p>Choose again </p>
                        <MdRemoveShoppingCart className='icon'></MdRemoveShoppingCart>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;