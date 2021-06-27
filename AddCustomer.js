import React, {Component} from 'react';

class AddCustomer extends Component{
    state = {
        id : null,
        firstname : null,
        lastname : null,
        customerid : null,
    }
   handleChangen = (e) =>{
       this.setState({
           [e.target.id] : e.target.value
       

       })
     }
     handleSubmit = (e)=>{
         e.preventDefault()
         console.log(this.state)
         this.props.add_func(this.state)

         this.setState({
             id: null,
             firstname: null,
             lastname: null,
             customerid: null

          } )
          document.getElementById('id').value = ''
          document.getElementById('firstname').value =''
          document.getElementById('lastname').vale =''
          document.getElementById('customerid').value=''
     }
   
    render () {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <p> ID :<input type="text" id="id" onChange={this.handleChange}/></p>
                    <p> First Name: <input type="text" id="name" onChange={this.handleChange} /></p>
                    <p> Last Name : <input type="text" id="lastname" onChange={this.handleChange}/></p>
                    <p> Customer ID : <input type="text" id="customerid" onChange={this.handleChange}/></p>
             </form> 

              
              </div>)

             
             
        
        

    }
}
export default AddCustomer;