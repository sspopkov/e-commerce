import React, { useState, Suspense, lazy } from 'react';
import ProductList from './ProductList';
const Cart = lazy(() => import('cart/Cart'));
const CheckoutForm = lazy(() => import('checkout/CheckoutForm'));

const App = () => {
    const [isCheckoutVisible, setCheckoutVisible] = useState(false);

    const handleCheckout = () => {
        setCheckoutVisible(true);
    };

    return (
        <div>
            <h1>Каталог товаров</h1>
            <ProductList />
            <Suspense fallback={<div>Загрузка корзины...</div>}>
                <Cart onCheckout={handleCheckout} />
            </Suspense>
            {isCheckoutVisible && (
                <Suspense fallback={<div>Загрузка формы оплаты...</div>}>
                    <CheckoutForm />
                </Suspense>
            )}
        </div>
    );
};

export default App;
