import React from "react";
import { NavLink } from "react-router-dom";
import Pagination from "../common/Pagination";
import ProductCell from "./ProductCell/ProductCell";

let Products = (props) => {
  return (
    <article className="flex-grow-1 mt-5">
      <div className=" container-fluid">
        <Pagination  currentPage={props.currentPage} onPageChanged={props.onPageChanged} pages={props.pages}></Pagination>
        <div className=" d-flex flex-row justify-content-center flex-wrap">
          {props.products.map((data) => (
            <ProductCell key={data.id} id={data.id} imagesUrl={data.imagesUrl} price={data.price} name={data.name}></ProductCell>
          ))}
        </div>
      </div>
    </article>
  );
};
export default Products;
