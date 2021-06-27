import React from "react";

const Customer =({customers,delete_customer}) =>
{
    console.log(customers, delete_customer)
    const custtomer_jsx_list = customers.map(costomer => {
        const {id,firstname,lastname,customerid} = costomer
        return (
            <div key={id}>
                <p>Id:{id}</p>
                <p>FirstName: {firstname}</p>
                <p>LastName: {lastname}</p>
                <p>CustomerId: {customerid}</p>
                <button className="btn" onClick={() => delete_customer(id)}>X</button>
             </div>   
        )    

    })
    return (
        <div>
            {custtomer_jsx_list}
          </div>
    )
}
export default Customer