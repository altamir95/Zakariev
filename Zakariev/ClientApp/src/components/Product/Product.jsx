import React from "react";
import AccordionCards from "./AccordionCards/AccordionCards";
let Product = (props) => {
  return (
    <article className=" mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
          <div className="col">
            <p className=" text-center">
              <img alt="" width="250" src={props.product.imagesUrl}></img>
            </p>
          </div>
          <div className="col">
            <p className="display-4 serif">{props.product.name}</p>
            <p className="mb-5 text-black-50 font-weight-bold">{props.product.short_info}</p>
            <p className="h4 mb-3 font-weight-bold">
              <span className="text-uppercase  font-weight-normal ">Цена: </span>
              {props.product.price} ₽
            </p>
            <button
              type="button"
              onClick={() => {
                props.putProductInBasket(props.product.id);
                props.updateBasketCount();
              }}
              className=" text-uppercase btn btn-success rounded-0   mb-5"
            >
              В КОРЗИНУ
            </button>
            <div className="accordion m-0" id="accordionExample">
              {props.product.productСharacteristics.map((data) => (
                <AccordionCards key={data.id} id={data.id} main={data.main} minor={data.minor}></AccordionCards>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Product;
