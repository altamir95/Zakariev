import { NavLink } from "react-router-dom";

function Start() {
  return (
    <article className="flex-grow-1 d-flex flex-column  justify-content-center bg-students ">
      <div className="container">
        <div className="row justify-content-center  ">
          <div className="  d-inline-flex align-items-center  flex-column  ">
            <p className=" p-2 m-0 display-4  font-weight-bold  text-uppercase  text-white d-none d-sm-none d-md-inline d-lg-inline d-xl-inline">Добро пожаловать!</p>
            <p className=" p-2 m-0 h1  text-center  font-weight-bold  text-uppercase  text-white  d-inline d-sm-inline d-md-none d-lg-none d-xl-none">Добро пожаловать!</p>
            <NavLink to={"/products"} type="button" className="btn btn-primary  rounded-0 btn-lg text-uppercase">к покупкам</NavLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Start;
