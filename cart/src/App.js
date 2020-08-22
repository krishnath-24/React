import React from 'react';
import Cart from './components/Cart';
import NavBar from './components/NavBar';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      itemCount : 3,
      products: [
        {
          id: 1,
          title: 'iPhone',
          price: '10$',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 2,
          title: 'MacBook',
          price: '1000$',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 3,
          title: 'Watch',
          price: '100$',
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  }


  handleIncreaseQuantity = (product) => {

    const id = product.id;
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    
    this.setState({
      products: products,
      itemCount : this.state.itemCount + 1
    });
  }

  handleDecreaseQuantity = (product) => {
    const id = product.id;
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].quantity === 0) return;
    products[index].quantity -= 1;
    this.setState({
      products: products,
      itemCount : this.state.itemCount - 1
    });
  }

  handleDeleteProduct = (id) => {

    console.log('deleting : ', id);

    let { products } = this.state;

    products = products.filter((item, index, arr) => id !== item.id);

    this.setState({
      products
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar itemCount = {this.state.itemCount} />
        <Cart
          products= {this.state.products}
          onIncrease={this.handleIncreaseQuantity}
          onDecrease={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteProduct}
        />
      </div>
    );
  }
}




export default App;
