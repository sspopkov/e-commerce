import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store/cartActions';

const products = [
    { id: 1, name: 'Товар 1' },
    { id: 2, name: 'Товар 2' },
];

const ProductList = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span>
                    <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;