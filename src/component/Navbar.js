import React , {useContext} from "react";
import { Link} from "react-router-dom"
import styles from "./Navbar.module.css";
import shopCart from "../icon/shop.svg"
import { cartContext } from "../context/CartContextProvider";

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div className={styles.mainContainer}>
        <div className={styles.header}>
           <div className={styles.listContainer}>
               <ul className={styles.list}>
                   <li><Link to="/">Home</Link> </li>
                   <li><Link to="/products">Products</Link> </li>
                   <li><Link to="/signup">Sign Up</Link> </li>
               </ul>
           </div>
           <div className={styles.logo}>
               <Link to="/cart"><img src={shopCart} alt="shopcart"/></Link> 
               <span>{state.itemCounter}</span>
           </div>
        </div>

        </div>
    );
};

export default Navbar;