import React,{Component} from "react";
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component{

  state = {
    ninjas :[
      {name : "Anuj", age : 21, belt : "black", id : 1},
      {name : "Ram", age : 41, belt : "black-gold", id : 2},
      {name : "Raj", age : 27, belt : "blue", id : 3}
    ]
  }


  addNinja = (ninja) => {
                ninja.id = Math.random();
                let ninjas = [...this.state.ninjas,ninja];
                this.setState({
                  ninjas : ninjas
                })

             }

  deleteNinja = (id) => {

    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas : ninjas
    })
  }

  render(){

    return (
      <div>
      <h1>Welcome To the React App</h1>
      <Ninjas ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja} />
      <AddNinja addNinja = {this.addNinja} />
      </div>
      
    );
  }
}

export default App; 
