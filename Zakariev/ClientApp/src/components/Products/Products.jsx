import React from "react";
import { NavLink } from "react-router-dom";

let Products = (props) => {
  return (
    <article className="flex-grow-1 mt-5">
      <div className=" container-fluid">
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-center">
            {props.pages.map(p => (
              <div key={"1"+p.id}>
                <li  key={"2"+p.id}  className={"page-item " + (p === props.currentPage && "active")}>
                  <button  key={"3"+p.id} 
                    onClick={() => {
                      props.onPageChanged(p);
                    }}
                    className="page-link "
                  >
                    {p}
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </nav>
        <div className="row  justify-content-center  row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
          {props.products.map(data => (
            <div key={"5"+data.id} className="col nav-link d-flex flex-column   text-dark align-items-start p-3 m-5">
              <img  key={"1"+data.id} alt="" className=" w-75 align-self-center" src={data.imagesUrl}></img>
              <p  key={"2"+data.id} className="h2 font-weight-light">{data.name}</p>
              <p  key={"3"+data.id} className="h5 font-weight-bold ">{data.price} ₽</p>
              <NavLink  key={"4"+data.id} to={"/product/" + data.id} type="button" className="btn btn-secondary rounded-0  ">
                Подробнее
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
export default Products;