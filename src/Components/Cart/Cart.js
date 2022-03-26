import React from 'react';
import SelectedProduct from "../../SelectedProduct/SelectedProduct"
import "./Cart.css"
const Cart = (props) => {
    const {cart,chooseForMe,chooseAgain,removeProduct} = props
    return (
        <div>
     <div className="card h-100 p-3">
      <div className="card-body">
        <h3 className="card-title">Selected Laptop</h3>
      </div>

      <div>
          {cart.map((singleProduct,id)=>(
              <SelectedProduct 
              key={id}
              singleProduct={singleProduct}
              removeProduct={removeProduct}
              ></SelectedProduct>
          ))}


     </div>

     
     <div>
         <button onClick={chooseForMe}   className='btn btn-success'>
          Choose One For Me
         </button>

         <button  onClick={chooseAgain} className='btn btn-danger'>
             Choose Again
         </button>

    </div>
     </div>
      
      
    </div>
    );
};

export default Cart;