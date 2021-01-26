import { NavLink } from "react-router-dom";
import React from "react";

function Orders(props) {
  return (
    <>
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <article className="flex-grow-1 mt-5 d-flex flex-column">
        
          <div className=" container-fluid">
            <NavLink to="/editor" className="btn btn-info text-left"> ⇐ Редактор продуктов</NavLink>
            <nav aria-label="Page navigation example ">
              <ul className="pagination justify-content-center">
                {props.pages.map((p) => {
                  return (
                    <li className={"page-item " + (p === props.currentPage && "active")}>
                      <div
                        onClick={() => {
                          props.onPageChanged(p);
                        }}
                        className="page-link "
                        href="#"
                      >
                        {p}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className=" justify-content-center ">
              {props.orders.map((data, index) => (
                <div className="bg-secondary border-dark rounded-lg p-2 m-2">
                  <p className="text-uppercase">заказ № {data.id}</p>
                  <p className="text-uppercase">Номер заказчика: {data.phoneNum}</p>
                  {data.productInfos.map((data, index) => (
                    <>
                      <NavLink to={"/product/"+data.productId}><span className="btn btn-sm btn-dark m-2">{data.nameProduct} <span class="badge badge-light">{data.quantity}</span></span> </NavLink>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
export default Orders;
