import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    render() {

        return (
            <div className= "cart-item-container">
                <h2 style ={{marginLeft : 20}}>Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
                
        )
    }
}



export default Cart;