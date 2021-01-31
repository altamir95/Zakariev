import { NavLink } from "react-router-dom";
import React from "react";
const Logo = "/images/logo.svg";
const Basket = "/images/baskete.svg";
var headerImg = {
  width: 50,
  height: 50,
};
function Header(props) {
  return (
    <div className="fixed-top shadow-lg">
      <header className="navbar navbar-white bg-white container-lg container-md container-xl ">
      <NavLink className="navbar-brand d-flex flex-row justify-content-center align-items-center text-dark" to="/products">
        <img alt="" src={Logo} className="d-inline-block " width={headerImg.width} height={headerImg.height} loading="lazy" />
        <div className=" justify-content-center  d-none d-sm-none d-md-flex d-lg-flex d-xl-flex  flex-column">
          <p className="m-0 p-0 text-uppercase serif font-weight-bold border-bottom border-dark">закариев.ру</p>
          <small className="m-0 p-0">Лечим натурально</small>
        </div>
      </NavLink>
      <div className=" justify-content-end" id="navbarSupportedContent">
        <ul className="flex-row navbar-nav">
          <li className="nav-item">
            <NavLink to={"/basket"} type="button" className="nav-link active h5 d-flex flex-row font-weight-light">
              <img alt="" src={Basket} className="d-inline-block align-top mr-2" width={headerImg.width} height={headerImg.height} loading="lazy" />
              <span className="badge badge-primary  align-self-center">{props.basketCount}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
    </div>
    
  );
}

export default Header;
