import React from 'react';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/product/:productId" element={ProductDetail} />
                    <Route path="*" element={<div>404 Not found!</div>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
