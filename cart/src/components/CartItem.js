import React from 'react';


class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'Wall Clock',
            price: 999,
            quantity: 1,
            image: ''
        }
    }

    increaseQuantity = () => {

        this.setState((prevState)=>{
            return {quantity : prevState.quantity + 1}
        });
    }

    decreaseQuantity = () => {

        if(!this.state.quantity) return;
        this.setState((prevState)=>{
            return {quantity : prevState.quantity && prevState.quantity - 1}
        });
    }

    render() {

        const { title, price, quantity, image } = this.state;
        
        return (
            <div className="cart-item">

                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">

                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs : {price}</div>
                    <div style={{ color: '#777' }}>Qty : {quantity}</div>

                    <div className="cart-item-actions">
                        {/* {Buttons here} */}
                        <img onClick={this.increaseQuantity} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/864/864378.svg"></img>
                        <img onClick={this.decreaseQuantity} alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/864/864373.svg"></img>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"></img>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
}

export default CartItem;