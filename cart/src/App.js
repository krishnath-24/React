import React from 'react';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import * as firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      itemCount : 3,
      products: [],
      loading : true
    }
    this.db = firebase.firestore();
  }

   componentDidMount() {

    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{
      
      const products = snapshot.docs.map(function(doc) {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading : false
      })
    })
    
  }

  addProduct= () => {

    this.db
    .collection('products')
    .add({
      name : 'Washing Machine',
      price : '500',
      quantity : '2',
      image : 'data:image/jpeg;base64,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'
    })
    .then(docRef=>{
      console.log('Product Added',docRef);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  componentDidUpdate = (prevProp, prevState) => {
    console.log('componentDidUpdate');
  }


  handleIncreaseQuantity = (product) => {

    const { products } = this.state;  

    const docRef = this.db.collection('products').doc(product.id);

    docRef  
      .update({
        quantity : product.quantity + 1
      })
      .then(() => {
        console.log('updated successfully in the firebase');
      })
      .catch(error => {
        console.log(error);
      })
    
    this.setState({
      products: products,
      itemCount : (this.state.itemCount + 1)
    });
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    if (product.quantity === 0) return;

    const docRef = this.db.collection('products').doc(product.id);

    docRef
      .update({
        quantity : product.quantity - 1
      })
      .then(() => {
        console.log('updated successfully in the firebase');
      })
      .catch(error => {
        console.log(error);
      })
    
    this.setState({
      products: products,
      itemCount : (this.state.itemCount - 1)
    });
  }

  getTotalPrice = () => {

    let totalPrice = 0;
    const {products} = this.state;
    products.forEach(product => {
      totalPrice += product.quantity * product.price;
    });

    return totalPrice;
  }

  
  /**
   * Used to delete an item from the cart
   * 
   * @param  { the id of the item } id
   */
  handleDeleteProduct = (id) => {

    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(()=>{
        console.log('deleted');
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const {loading,products} = this.state;

      
    return  (
      <div className="App">
        <NavBar itemCount = {this.state.itemCount} />
        {loading && ( <h1>Loading...</h1> )}
        {/* <button style={{padding:'10px', border: 'none',borderRadius: '5px', color: 'green',margin:'10px', background : '#ccc'}} onClick={this.addProduct}>Add Product</button> */}
        <Cart
          products= {products}
          onIncrease={this.handleIncreaseQuantity}
          onDecrease={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize : 20, fontFamily : 'sans-serif'}}>Total : ${this.getTotalPrice()}</div>
      </div>
    );
    
  }
}




export default App;
