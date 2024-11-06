import React from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from 'catalog/Store';

const CheckoutForm = () => {
    const items = useSelector((state) => state.items);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика отправки данных заказа
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Оформление заказа</h2>
            <div>
                <label>Имя:</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label>Адрес:</label>
                <input type="text" name="address" required />
            </div>
            <div>
                <h3>Ваши товары:</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <button type="submit">Подтвердить заказ</button>
        </form>
    );
};

export default () => (
    <Provider store={store}>
        <CheckoutForm />
    </Provider>
);
