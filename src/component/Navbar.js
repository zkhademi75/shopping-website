import React , {useContext} from "react";
import { Link} from "react-router-dom"
import styles from "./Navbar.module.css";
import shopCart from "../icon/shop.svg"
import { cartContext } from "../context/CartContextProvider";
import down from "../images/drop-down-arrow.png"

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
                   <li className={styles.dropdown}>
                        <Link to="#" className={styles.dropbtn}>Services</Link>
                        <div className={styles.dropdownContent}>
                            <Link to="#">service 1</Link>
                            <Link to="#">service 2</Link>
                            <Link to="#">service 3</Link>
                        </div>
                        <img src={down} alt="down"/>
                   </li>
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