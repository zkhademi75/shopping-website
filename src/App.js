import React, { Component } from 'react';
import { Route, Routes , Navigate} from 'react-router-dom';

import Navbar from './component/Navbar';
import Landing from './component/Landing';
// import Products from './component/Products';

import Footer from './component/Footer';
import SingUp from './component/SignUp';
import ProductDetails from './component/ProductDetails';
import ShopCart from './component/ShopCart';

import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Store from './component/Store';



class App extends Component {
    render() {
        return (
            
                <ProductsContextProvider>
                    <CartContextProvider>
                    <Navbar/>
                    <Routes>
                    <Route path="/signup" element={<SingUp/>} />
                    <Route path="/products" element={<Store/>} />
                    <Route path="/products/:id" element={<ProductDetails/>} />
                    <Route path="/cart" element={<ShopCart />} />
                   <Route path="/" element={<Landing/>} />
                   <Route path="/*" element={<Navigate to="/"/>} />
                    </Routes>
                    <Footer/>
                    </CartContextProvider>
               
                </ProductsContextProvider>
            
        );
    }
}

export default App;