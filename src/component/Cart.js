import React , {useContext} from 'react';
import { cartContext } from '../context/CartContextProvider';
import { shorten } from './helper/functions';
import trashIcon from "../icon/trash.svg";
import styles from "./Cart.module.css"

const Cart = (props) => {

  const {image , title , price , quantity} = props.data
  const {dispatch} = useContext(cartContext)

    return (
        <div className={styles.container}>
          <img src={image} alt="product"/>
          <div className={styles.data}>
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
          </div>
          <div>
            <span className={styles.quantity}>{quantity}</span>
          </div>
          <div className={styles.buttonContainer}>
            {
              quantity > 1 ?
              <button onClick={() => dispatch({type : "DECREASE" , payload : props.data})}>-</button> :
              <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : props.data})}><img src={trashIcon} alt="trash" style={{whith : '20px'}}/></button>
            }
            <button onClick={() => dispatch({type : "INCREASE" , payload : props.data})}>+</button>
          </div>
        </div>
    );
};

export default Cart;