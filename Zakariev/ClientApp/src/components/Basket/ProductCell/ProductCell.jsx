import React from "react";
import { NavLink } from "react-router-dom";

let ProductCell = (props) => {
  return (
    <div  className="col nav-link d-flex flex-column m-0 text-dark align-items-center  ">
      <NavLink  to={"/product/" + props.id} className=" d-flex flex-column align-items-center nav-link active text-dark">
        <img  className=" w-75 align-self-center" alt="" src={props.imagesUrl}></img>
        <p  className="h2 font-weight-light text-center ">
          {props.name}
        </p>
        <p  className="h5 font-weight-bold ">
          {props.price} ₽
        </p>
      </NavLink>
      <p className="m-4">
        <span onClick={(e) => props.updateBasket("DELETE", e.target.id)} id={props.id} className="select-block p-2 btn-secondary  rounded-left m-0 ">
          {" "}
          -{" "}
        </span>
        <span className="p-2  text-white bg-secondary  p2-3 pr-2 select-block">{props.quantity}</span>
        <span onClick={(e) => props.updateBasket("ADD", e.target.id)} id={props.id} className="select-block p-2 btn-secondary rounded-right m-0 ">
          +
        </span>
      </p>
    </div>
  );
};
export default ProductCell;
