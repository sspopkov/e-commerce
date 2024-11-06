import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from 'catalog/Store';

const Cart = ({ onCheckout }) => {
    const items = useSelector((state) => state.items);

    return (
        <div>
            <h2>Корзина</h2>
            {items.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            )}
            <button onClick={onCheckout}>Оформить заказ</button>
        </div>
    );
};

export default (props) => (
    <Provider store={store}>
        <Cart {...props} />
    </Provider>
);
