import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductCell from "./ProductCell/ProductCell";
import ModalLabel from "./ModalLabel/ModalLabel";

let Basket = (props) => {
  return (
    <article className="flex-grow-1 mt-5 d-flex flex-column">
      <p className=" text-uppercase text-center display-4 font-weight-bold serif">Корзина</p>

      {localStorage.getItem("mybasket") === undefined ? (
        <p className="text-uppercase text-center display-4 text-danger">пусто</p>
      ) : JSON.parse(localStorage.getItem("mybasket")).length === 0 ? (
        <p className="text-uppercase text-center display-4 text-danger">пусто</p>
      ) : (
        <>
          <div className=" container-fluid">
            <div className="row  justify-content-center row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {props.basketProducts.productsWithQuantities.map((data, index) => (
                <ProductCell id={data.id} imagesUrl={data.imagesUrl} name={data.name} price={data.price} quantity={data.quantity} updateBasket={props.updateBasket} updateBasket={props.updateBasket}></ProductCell>
              ))}
            </div>
          </div>
          <button type="button" className="btn btn-success align-self-center mb-5 rounded-0" data-toggle="modal" data-target="#exampleModal">
            <p className="m-0 text-uppercase h4">
              заказать <span className="badge badge-light ">{props.basketProducts.amountToPay} руб.</span>
            </p>
          </button>
        </>
      )}
      <ModalLabel phoneNum={props.phoneNum} onchangeStateTextarea={props.onchangeStateTextarea} toOrder={props.toOrder}></ModalLabel>
    </article>
  );
};
export default Basket;
