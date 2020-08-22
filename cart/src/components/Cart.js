import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {
                products.map((product) => {
                    return (
                        <CartItem
                            onIncrease={props.onIncrease}
                            onDecrease={props.onDecrease}
                            onDelete={props.onDelete}
                            product={product}
                            key={product.id}
                        />)
                })
            }
        </div>
    )
}

export default Cart;