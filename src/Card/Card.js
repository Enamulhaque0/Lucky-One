import "./Card.css";


const Card = ({laptop, addToCarts}) =>{
    const{img,name,price} = laptop

    return(
      <div>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <p>${price}</p>

          <button onClick={()=>addToCarts(laptop)}>
               Add To Cart
          </button>

      </div>
    )

}

export default Card;