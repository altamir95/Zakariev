import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";

let Basket = (props) => {
  return (
    <article className="flex-grow-1 mt-5 d-flex flex-column">
      <p className=" text-uppercase text-center display-4 font-weight-bold">Корзина</p>
      <div className=" container-fluid">
        <div className="row  justify-content-center row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {props.basketProducts.productsWithQuantities.map((data, index) => (
            <div key={"1" + index} className="col nav-link d-flex flex-column m-0 text-dark align-items-center  ">
              <NavLink key={"5" + index} to={"/product/" + data.id} className=" d-flex flex-column align-items-center nav-link active text-dark" >
                <img key={"2" + index} className=" w-75 align-self-center" alt="" src={data.imagesUrl}></img>
                <p key={"3" + index} className="h2 font-weight-light text-center">
                  {data.name}
                </p>
                <p key={"4" + index} className="h5 font-weight-bold ">
                  {data.price} ₽
                </p>
              </NavLink>
              <p className="m-4">
                <span onClick={(e) => props.updateBasket("DELETE",e.target.id)} id={data.id} className="select-block p-2 btn-secondary  rounded-left m-0 ">
                  {" "}
                  -{" "}
                </span>
                <span className="p-2  text-white bg-secondary  m-0 ">{data.quantity}</span>
                <span onClick={(e) => props.updateBasket("ADD",e.target.id)} id={data.id} className="select-block p-2 btn-secondary rounded-right m-0 ">+</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {JSON.parse(localStorage.getItem("mybasket")).length === 0 ? (
        <p className="text-uppercase text-center display-4 text-danger">пусто</p>
      ) : (
        <button type="button" className="btn btn-success align-self-center mb-5" data-toggle="modal" data-target="#exampleModal">
          <p className="m-0 text-uppercase h3">
            заказать <span class="badge badge-light">{props.basketProducts.amountToPay} руб.</span>
          </p>
        </button>
      )}

      {/* ------------------ */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Введите свой номер телефона чтоб мы могли связаться с вами для дальнейшего офрмления заказа
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={props.phoneNum || ""} onChange={(e) => props.onchangeStateTextarea(e.target.value || "", "num")} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Закрыть
              </button>

              <button type="button" onClick={() => props.toOrder()} data-dismiss="modal" className="btn btn-success">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
    </article>
  );
};
export default Basket;
