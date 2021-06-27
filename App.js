import React from 'react'
import { Component } from 'react'
import './App.css';
import './Customer';
import Customer from './Customer';
import AddCustomer from '.AddCustomer';


class App extends Component() {
  state = {
    customers:
    [{ customer:"Adriano", lastname:"Chilentano",customerid:23,id:1},
    { customer:"Monica", lastname:"Beluchi",customerid:34,id:2},
    { customer: "Cristiano", lastname:"Ronaldo", customerid:45,id:3}]
  }
  addNewCustomer = (costomer) =>{
    costomer.id = Math.random()
    console.log(this.state.customers)
    const new_list_costomer = [...this.state.customers]
    new_list_costomer.push(costomer)
    this.setState({
      customers : new_list_costomer
    

    })
  }
  deleteCustomer = (id) => {
    console.log(this.state.customers)
    const new_list_costomer = [...this.state.customers]
    this.setState({
      customers: new_list_costomer
    

    })

  }
  render() {
    return (
      <div className="App">
        <Customer customers={this.state.customers} delete_customer = {this.deleteCustomer}/>
        <AddCustomer add_func={this.addNewCustomer}/>

        </div>


    );
  }
}

export default App;
