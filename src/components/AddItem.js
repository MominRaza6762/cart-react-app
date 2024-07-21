import React from 'react'
import { useState } from 'react'
export const AddItem = ({addItem}) => {
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!Name || !Price) {
            alert("name or price Cant be blank")
            
        } else {
            addItem(Name ,Number(Price))

            
        }

    }
    return (
        <form className='container mt-4' onSubmit={submit}>
            <div className="mb-3 col-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="inputName" aria-describedby="name"/>
            </div>
            <div className="mb-3 col-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" value={Price} onChange={(e)=>{setPrice(Number(e.target.value))}} className="form-control" id="inputPrice"/>
            </div>
           
            <button type="submit" className="btn btn-success">Add Item</button>
        </form>
    )
}
