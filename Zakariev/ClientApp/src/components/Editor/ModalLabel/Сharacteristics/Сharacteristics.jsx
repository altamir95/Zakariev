import React from "react";

let Сharacteristics = (props) => {
  return (
    <div className="form-group border border-info rounded-0 shadow-lg p-3">
      <input
        onChange={(event) => {
          props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
        }}
        name="main"
        id={props.index}
        value={props.productsTemplate.productСharacteristics[props.index].main}
        className="form-control mb-3"
        type="text"
        placeholder="Заглавие характиристики"
      ></input>
      <textarea
        onChange={(event) => {
          props.onchangeStateTextarea(event.target.value, event.target.name, event.target.id);
        }}
        name="minor"
        id={props.index}
        value={props.productsTemplate.productСharacteristics[props.index].minor}
        className="form-control mb-3"
        type="textarea"
        placeholder="Текст характиристики"
        rows="3"
      ></textarea>
      <button onClick={() => props.deleteCharacteristicToTemplate(props.index)} type="button" className="btn btn-danger text-uppercase">
        Удалить
      </button>
    </div>
  );
};
export default Сharacteristics;
