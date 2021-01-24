import {NavLink} from "react-router-dom";
import React from "react";
const Logo = "/images/logo.svg";
// const Support = "/images/support.svg";
const Basket = "/images/basket.svg";
// const Home = "/images/home.svg";
var headerImg = {
    width: 35,
    height: 35
};
function Header(props) {
  return (
    <header className="navbar navbar-dark bg-black">
      <NavLink className="navbar-brand" to="/products">
      <img alt="" src={Logo} className="d-inline-block "  height="50" loading="lazy" />
      </NavLink>

      <div className=" justify-content-end" id="navbarSupportedContent">
        <ul className="flex-row navbar-nav">
          {/* <li className="nav-item mr-2">
            <NavLink  to="/start" className="nav-link active h5 font-weight-light" >
              <img src={Home} className="d-inline-block align-top mr-2" width={headerImg.width} height={headerImg.height} loading="lazy" />
              <span className="d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline">Главная</span>
            </NavLink>
          </li> */}
          <li className="nav-item mr-2">
          <NavLink to={"/basket"} type="button" className="nav-link active h5 font-weight-light">
          <img alt="" src={Basket} className="d-inline-block align-top mr-2" width={headerImg.width} height={headerImg.height} loading="lazy" />
              <span className="badge badge-primary">{props.basketCount}</span>
              </NavLink>
          </li>
          {/* <li className="nav-item mr-2">
            <a className="nav-link active h5 font-weight-light">
              <img src={Support} className="d-inline-block align-top mr-2" width={headerImg.width} height={headerImg.height} loading="lazy" />
              <span className="d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline">Поддержка</span>
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
