import { NavLink } from "react-router-dom";
import React from "react";
import Pagination from "../common/Pagination";
import ProductCell from "./ProductCell/ProductCell";
import ModalLabel from "./ModalLabel/ModalLabel";
function Editor(props) {
  return (
    <>
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <article className="flex-grow-1 mt-5 d-flex flex-column">
          <NavLink to="/orders" className="btn btn-info m-2  align-self-end">
            заказы ⇒
          </NavLink>
          <button type="button" onClick={() => props.emptiesProductsTamplate()} className="btn btn-success btn-lg align-self-center m-3 text-uppercase" data-toggle="modal" data-target="#staticBackdrop">
            добавить +
          </button>
          <div className=" container-fluid">
            <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged} pages={props.pages}></Pagination>
            <div className="row  justify-content-center  row-cols-2 row-cols-sm-4 row-cols-md-4 row-cols-lg-6 row-cols-xl-6">
              {props.products.map((data, index) => (
                <ProductCell id={data.id} imagesUrl={data.imagesUrl} name={data.name} price={data.price} deleteProduct={props.deleteProduct} fillsProductsTamplate={props.fillsProductsTamplate}></ProductCell>
              ))}
            </div>
          </div>
          <ModalLabel productsTemplate={props.productsTemplate} onchangeStateTextarea={props.onchangeStateTextarea} deleteCharacteristicToTemplate={props.deleteCharacteristicToTemplate} addCharacteristicToTemplate={props.addCharacteristicToTemplate} sendForm={props.sendForm}></ModalLabel>
        </article>
      </div>
    </>
  );
}
export default Editor;
