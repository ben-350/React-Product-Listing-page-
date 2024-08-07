import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); 
    const  renderList = products.map((product) => {
        const {id,title,image, price, category} = product
        return (
            
        <div className='four column wide'>
        <div className='ui link cards'>
            {products.map((product) => (
                <div className='card' key={product.id}>
                    <div className='image'>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className='content'>
                        <div className='header'>{product.title}</div>
                        <div className='meta price'>${product.price}</div>
                        <div className='meta'>{product.category}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
            
        )
    })
    const   {id, title} = products[0];
    return (
    );
};

export default ProductComponent;
