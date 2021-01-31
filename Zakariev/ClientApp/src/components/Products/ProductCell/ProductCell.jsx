import React from "react";
import { NavLink } from "react-router-dom";

let ProductCell = (props) => {
  return (
    <div  className="my-product-place mb-5 m-3 mt-5">
      <NavLink to={"/product/" + props.id} className="border-white d-flex flex-column  text-dark nav-link align-items-center  rounded-0 ">
        <img alt="" className="w-50" src={props.imagesUrl}></img>
        <p className=" h2 text-center font-weight-light serif mt-3">
          {props.name}
        </p>
        <p  className=" font-weight-bold">
          {props.price} ₽
        </p>
      </NavLink>
    </div>
  );
};
export default ProductCell;
