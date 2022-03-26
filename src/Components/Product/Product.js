import React from 'react';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css"
const Product = (props) => {
    const {img,name,price}= props.product
    return (
        <div>
        <div className="col">
          <div className="card">
              <img src={img} alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            <p><span>${price}</span></p>
            </div>
            <div>
              
                  <button
                className="btn w-100 bg-dark text-white pb-2 pt-2 ps-3 pe-3 bg-gradient shadow-none"
                onClick={()=>props.addToCart(props.product)}
              >
                Add to Cart
                <FontAwesomeIcon className="ms-3" icon={faCartPlus} />
              </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Product;