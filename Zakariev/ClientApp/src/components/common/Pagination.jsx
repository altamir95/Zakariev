import React from "react";
import { NavLink } from "react-router-dom";

let Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-center">
        {props.pages.map((p) => (
          <PaginationNums key={p} id={p.id} num={p} currentPage={props.currentPage} onPageChanged={props.onPageChanged}></PaginationNums>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;

let PaginationNums = (props) => {
  return (
    <div>
      <li className={"page-item " + (props.num === props.currentPage && "active")}>
        <button
          
          onClick={() => {
            props.onPageChanged(  props.num);
          }}
          className="page-link rounded-0"
        >
          {props.num}
        </button>
      </li>
    </div>
  );
};
