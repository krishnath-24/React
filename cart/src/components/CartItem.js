import React from 'react';

const CartItem = (props) => {

        const { title, price, quantity, image } = props.product;
        const {product} = props;
        return (
            <div className="cart-item">

                <div className="left-block">
                    <img style={styles.image} src={product.image}/>
                </div>
                <div className="right-block">

                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs : {price}</div>
                    <div style={{ color: '#777' }}>Qty : {quantity}</div>

                    <div className="cart-item-actions">
                        {/* {Buttons here} */}
                        <img onClick={() => props.onIncrease(product)} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/864/864378.svg"></img>
                        <img onClick={() => props.onDecrease(product)} alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/864/864373.svg"></img>
                        <img onClick = {() => props.onDelete(product.id)} alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"></img>
                    </div>
                </div>
            </div>
        )
}

const styles = {
    image: {
        height: 120,
        width: 120,
        backgroundColor: '#ccc',
        borderBottomLeftRadius : '14px'
    }
}

export default CartItem;