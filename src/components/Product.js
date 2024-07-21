import React from 'react'

export const Product = ({product , inc , dec , index , remove}) => {
  return (
    <div className='row container mt-2'>
        <div className="col-5">
            <h2 >
                {product.name}
                <span className ="badge bg-secondary">
                    Rs.{product.price}
                </span>

            </h2>
        </div>

        <div className="col-3">
            <div className = "btn-group" role="group" aria-label="Basic mixed styles exapmle">
                <button type="button" className="btn btn-danger " onClick={()=>{dec(index)}}>
                    -
                </button>
                <button type="button" className="btn btn-warning">
                    {product.quantity}
                    
                </button>
                <button type="button" className="btn btn-success" onClick={()=>{inc(index)}}>
                    +
                </button>
            </div>
        </div>

        <div className="col-2">
            {product.price*product.quantity}
        </div>
        <button className="btn btn-danger col-2" onClick={()=>{remove(index)}}>Remove</button>

    </div>
  )
}
