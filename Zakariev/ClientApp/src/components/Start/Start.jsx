import { NavLink } from "react-router-dom";

function Start() {
  return (
    <article className="flex-grow-1 d-flex flex-column  justify-content-center bg-students ">
      <div className="container">
        <div className="row justify-content-center  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
          <div className=" bg-transparent-black d-inline-flex align-items-center  flex-column  ">
            <p className="p-2  m-0 h3 font-weight-light  text-uppercase text-white ">Добро пожаловать!</p>
            <div className=" container-fluid">
                <p className="p-2  text-center m-0 font-weight-bold calor text-white ">На этом сайте вы можете преобрести бады сделанные только из натуральных продуктов и рецепт которых проверен годами.</p>
              
            </div>
            <NavLink to={"/products"} type="button" className="p-2 m-0  nav-link active h1 text-uppercase  font-weight-bold  ">
              к покупкам
        </NavLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Start;
