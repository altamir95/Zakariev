import { NavLink } from "react-router-dom";

function Start() {
  return (
    <article className="flex-grow-1 d-flex flex-column  justify-content-center bg-students ">
      {/* <div className="container">
        <div className="row justify-content-center  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2"> */}
      <div className=" d-inline-flex align-items-start  flex-column  ">
        <p className="p-2  m-0 h3 font-weight-light  text-uppercase text-dark bg-white">Добро пожаловать!</p>
        <div className=" container-fluid">
          <div className="row   row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
            <p className="p-2  m-0 font-weight-bold calor text-dark bg-white">На этом сайте вы можете преобрести бады сделанные только из натуральных продуктов и рецепт которых проверен годами.</p>
          </div>
        </div>
        <NavLink to={"/products"} type="button" className="p-2 m-0  nav-link active h1 text-uppercase  font-weight-bold  bg-white">
          к покупкам
        </NavLink>
      </div>
    </article>
  );
}

export default Start;
