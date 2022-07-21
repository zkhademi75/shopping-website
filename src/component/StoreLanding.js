import React , {useEffect  , useState} from 'react';
import axios from "axios";
import styles from "./LandingStore.module.css"
import Product from './shared/Product';
import { Link } from 'react-router-dom';

const StoreLanding = () => {
    const BASE_URL = "https://fakestoreapi.com"

    const getProducts = async () =>{
    const response = await axios.get (`${BASE_URL}/products?limit=4`)
    return response.data;
}

const [products , setProducts] = useState([]);
useEffect(()=>{
    const fetchAPI = async () => {
        setProducts(await getProducts());
    }

    fetchAPI();
} , [])
    
    return (
        <div>
        <div className={styles.container}>
           {
            products.map(product => <Product key={product.id} productData={product}/>)
           }
        </div>
        <div className={styles.textContainer}>
            <h3>Do you want to buy more ? </h3>
            <Link to="/products"><button>Go to Shop</button></Link>
        </div>
        </div>
    );
};

export default StoreLanding;