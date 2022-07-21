import React , {useContext} from 'react';
import { Link} from "react-router-dom"
import styles from "./ShopCart.module.css"

import Cart from './Cart';
import { cartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state , dispatch} = useContext(cartContext)

    return (
    <div className={styles.container}>
        <div className={styles.cartContainer}>
            {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>

        {
            state.itemCounter > 0 && 
            <div className={styles.payments}>
                <p><span>Total Items :</span>{ state.itemCounter }</p>
                <p><span>Total payment :</span>{ state.total }</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.clear} onClick={() => dispatch({type : "CLEAR"})}>Clear</button>
                    <button className={styles.checkout} onClick={() => dispatch({type : "CHECKOUTE"})}>Check Out</button>
                </div>
            </div>
        }
    
            {
               state.itemCounter === 0 && !state.checkout && 
               <div className={styles.complete}>
                   <h3>Want to Buy?</h3>
                   <Link to="/products">Back to shop</Link>
               </div>
           }
        {
            state.checkout && 
            <div className={styles.complete}>
                <h3>Cheked Out Successfully</h3>
                <Link to="/products">Buy More</Link>
            </div>
        }
       

        </div>
    );
};

export default ShopCart;