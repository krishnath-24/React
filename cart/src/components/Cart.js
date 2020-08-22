import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Phone',
                    price: '10$',
                    quantity: 1,
                    image: ''
                },
                {
                    id: 2,
                    title: 'Laptop',
                    price: '1000$',
                    quantity: 1,
                    image: ''
                },
                {
                    id: 3,
                    title: 'Watch',
                    price: '100$',
                    quantity: 1,
                    image: ''
                }
            ]
        }
    }


    handleIncreaseQuantity = (product) => {

        const id = product.id;
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].quantity += 1;
        this.setState({
            products : products
        });
    }

    handleDecreaseQuantity = (product) => {
        const id = product.id;
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].quantity === 0) return;
        products[index].quantity -= 1;
        this.setState({
            products : products
        });
    }

    handleDeleteProduct = (id) => {
        
        console.log('deleting : ', id);

        let {products} = this.state;

        products = products.filter((item, index, arr) => id !== item.id);

        this.setState({
            products
        });
    }


    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return (<CartItem onIncrease = {this.handleIncreaseQuantity} onDecrease = {this.handleDecreaseQuantity} onDelete = {this.handleDeleteProduct} product={product} key={product.id} />)
                    })
                }
            </div>
        )
    }
}



export default Cart;