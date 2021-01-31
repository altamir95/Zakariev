import React from "react";

let ProductCell = (props) => {
  return (
    <div  className="col nav-link d-flex flex-column  text-dark align-items-start p-3 m-5">
      <img  alt="" className=" w-75 " src={props.imagesUrl}></img>
      <p  className="h2 font-weight-light">
        {props.name}
      </p>
      <p  className="h5 font-weight-bold ">
        {props.price} ₽
      </p>
      <button  type="button" onClick={(event) => props.deleteProduct(event.target.getAttribute("data-productid"))} data-productid={props.id} className="btn btn-danger rounded-0  m-2">
        УДАЛИТЬ
      </button>
      <button  type="button" className="btn  btn-primary rounded-0 m-2 " onClick={() => props.fillsProductsTamplate(props.id)} data-toggle="modal" data-target="#staticBackdrop">
        ИЗМЕНИТЬ
      </button>
    </div>
  );
};
export default ProductCell;
