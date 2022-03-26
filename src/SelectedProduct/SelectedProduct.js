import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectedProduct.css";
const SelectedProduct = (props) => {
  const { img, id, name } = props.singleProduct;
  const { removeProduct } = props;
  return (
    <div className="row selected-person d-flex align-items-center my-3 m-1">
      <div className="col-4 p-0">
        <img className="w-100" src={img} alt={name} />
      </div>
      <div className="col-5">
        <h5 className="text-center">{name}</h5>
      </div>
      <div className="col-3 pointer" >
        <FontAwesomeIcon onClick={() => removeProduct(id)} className="pb-1" icon={faTrash} size="xl"/>
      </div>
    </div>
  );
};

export default SelectedProduct;
