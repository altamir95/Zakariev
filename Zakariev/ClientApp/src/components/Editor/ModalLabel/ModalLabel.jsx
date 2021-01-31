import React from "react";
import Inputs from "./Inputs/Inputs";
import Сharacteristics from "./Сharacteristics/Сharacteristics";

let ModalLabel = (props) => {
  return (
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
          <form className="col" id="myform">
            <Inputs onchangeStateTextarea={ props.onchangeStateTextarea} productsTemplate={props.productsTemplate}></Inputs>
            {props.productsTemplate.productСharacteristics.map((data, index) => (
              <Сharacteristics index={index} id={data.id} onchangeStateTextarea={props.onchangeStateTextarea} deleteCharacteristicToTemplate={props.deleteCharacteristicToTemplate} productsTemplate={props.productsTemplate}></Сharacteristics>
            ))}
          </form>
          <div className="col">
            <button type="button" id="addingСharacterPlace" onClick={() => props.addCharacteristicToTemplate()} className="btn btn-sm btn-info text-uppercase">
              Добавить характиристику
            </button>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary  text-uppercase" data-dismiss="modal">
            Отмена
          </button>
          <button onClick={() => props.sendForm()} data-dismiss="modal" type="button" className="btn btn-primary text-uppercase">
            Отправить
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
export default ModalLabel;
