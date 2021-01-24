import { NavLink } from "react-router-dom";
import React from "react";

function Editor(props) {
  return (
    <>
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <article className="flex-grow-1 mt-5 d-flex flex-column">
        <NavLink to="/orders" className="btn btn-info m-2  align-self-end">заказы ⇒</NavLink>
          <button type="button" onClick={() => props.emptiesProductsTamplate()} className="btn btn-success btn-lg align-self-center m-3 text-uppercase" data-toggle="modal" data-target="#staticBackdrop">
            добавить +
          </button>
          <div className=" container-fluid">
            <nav aria-label="Page navigation example ">
              <ul className="pagination justify-content-center">
                {props.pages.map((p,index) => {
                  return (
                    <li key={"1"+index} className={"page-item " + (p === props.currentPage && "active")}>
                      <button   key={"2"+index}
                        onClick={() => {
                          props.onPageChanged(p);
                        }}
                        className="page-link "
                      >
                        {p}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="row  justify-content-center  row-cols-2 row-cols-sm-4 row-cols-md-4 row-cols-lg-6 row-cols-xl-6">
              {props.products.map((data, index) => (
                <div  key={"1"+data.id} className="col nav-link d-flex flex-column  text-dark align-items-start p-3 m-5">
                  <img  key={"2"+data.id} alt="" className=" w-75 " src={data.imagesUrl}></img>
                  <p  key={"3"+data.id} className="h2 font-weight-light">{data.name}</p>
                  <p  key={"4"+data.id} className="h5 font-weight-bold ">{data.price} ₽</p>
                  <button  key={"5"+data.id} type="button" onClick={(event)=>props.deleteProduct(event.target.getAttribute("data-productid"))} data-productid={data.id} className="btn btn-danger rounded-0  m-2">
                    УДАЛИТЬ
                  </button>
                  <button  key={"6"+data.id} type="button" className="btn  btn-primary rounded-0 m-2 " onClick={() => props.fillsProductsTamplate(data.id)} data-toggle="modal" data-target="#staticBackdrop">
                    ИЗМЕНИТЬ
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-uppercase text-center" id="staticBackdropLabel">
                    Форма с данными
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* форма */}
                  <form className="col" id="myform">
                    <input
                      className="form-control mb-3"
                      name="name"
                      onChange={(event) => {
                        props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
                      }}
                      value={props.productsTemplate.name}
                      type="text"
                      placeholder="Название продукта"
                    ></input>
                    <input
                      className="form-control mb-3"
                      name="imagesUrl"
                      onChange={(event) => {
                        props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
                      }}
                      value={props.productsTemplate.imagesUrl}
                      type="text"
                      placeholder="адрес изоброжения"
                    ></input>
                    <textarea
                      className="form-control mb-3"
                      name="shortInfo"
                      onChange={(event) => {
                        props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
                      }}
                      value={props.productsTemplate.shortInfo}
                      type="textarea"
                      placeholder="Небольшое описание продукта"
                      rows="3"
                    ></textarea>
                    <input
                      className="form-control mb-3"
                      onChange={(event) => {
                        props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
                      }}
                      value={props.productsTemplate.price}
                      name="price"
                      type="number"
                      placeholder="цена"
                    ></input>
                    {/* характиристике в форме */}
                    {props.productsTemplate.productСharacteristics.map((data, index) => (
                      <div  key={"1"+data.id} className="form-group border border-info rounded-0 shadow-lg p-3">
                        <input  key={"2"+data.id}
                          onChange={(event) => {
                            props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
                          }}
                          name="main"
                          id={index}
                          value={props.productsTemplate.productСharacteristics[index].main}
                          className="form-control mb-3"
                          type="text"
                          placeholder="Заглавие характиристики"
                        ></input>
                        <textarea  key={"3"+data.id}
                          onChange={(event) => {
                            props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
                          }}
                          name="minor"
                          id={index}
                          value={props.productsTemplate.productСharacteristics[index].minor}
                          className="form-control mb-3"
                          type="textarea"
                          placeholder="Текст характиристики"
                          rows="3"
                        ></textarea>
                        <button  key={"4"+data.id} onClick={()=>props.deleteCharacteristicToTemplate(index)} type="button" className="btn btn-danger text-uppercase">
                          Удалить
                        </button>
                      </div>
                    ))}
                    {/*  */}
                  </form>
                  {/*  */}

                  <div className="col">
                    <button type="button" id="addingСharacterPlace" onClick={()=>props.addCharacteristicToTemplate()} className="btn btn-sm btn-info text-uppercase">
                      Добавить характиристику
                    </button>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary  text-uppercase" data-dismiss="modal">
                    Отмена
                  </button>
                  <button onClick={() => props.sendForm()}  data-dismiss="modal" type="button" className="btn btn-primary text-uppercase">
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
export default Editor;
