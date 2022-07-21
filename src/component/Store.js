import React , {useContext} from 'react';

import { ProductsContext } from '../context/ProductsContextProvider';
import styles from "./Store.module.css"
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container}>
           {
            products.map(product => <Product key={product.id} productData={product}/>)
           }
        </div>
    );
};

export default Store;