import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Main.css";
const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
const chooseAgain=() =>{
    setCart([])
}


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
const chooseForMe= ()=>{
    if (cart.length !== 0) {
        const randomNumber = Math.floor(Math.random() * cart.length);
  
        setCart([cart[randomNumber]]);
      }
}

const removeProduct= (id)=>{
    const nowProduct=cart.filter((product)=>product.id!==id)
    setCart(nowProduct)
}

const addToCart=(product) =>{
    let match = cart.find((p) => p.name === product.name);
    if (!match) {
      setCart([...cart, product]);
    } else {
        alert("This Product Is Added") 
    }
}
  return (
    <div className="mx-auto row main">
    <div className="col-9 sm-d-flex sm-justify-content-center">
      <div className="row row-cols-1 row-cols-md-3 g-4 flex-column-reverse flex-md-row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
    </div>
    <div className="col-3 mt-5">
      <Cart
        cart={cart}
        chooseForMe={chooseForMe}
        removeProduct={removeProduct}
        chooseAgain={chooseAgain}
      ></Cart>
    </div>
  </div>
  );
};

export default Main;
