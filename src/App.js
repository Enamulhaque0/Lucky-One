import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {

const [laptops, setLaptop] = useState([])
const [addToCart, setaddToCart] = useState([])


const addToCarts=(laptop)=>{
  const newArray =[...addToCart,laptop]
  setaddToCart(newArray) 
}

useEffect(()=>{
  fetch("Data.json")
  .then(res=> res.json())
  .then(data=> setLaptop(data))
},[])
  

  return (
    <div className="App">
      <Navbar />
    <div className='card-container'>
    {laptops.map(laptop=><Card key={laptop.id} addToCarts={addToCarts} laptop={laptop}></Card>)}
    </div>
      
    </div>
  );
}

export default App;
