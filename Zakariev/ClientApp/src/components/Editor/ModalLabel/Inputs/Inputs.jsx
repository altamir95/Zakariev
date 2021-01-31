import React from "react";

let Inputs = (props) => {
  return (
    <>
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
    </>
  );
};
export default Inputs;
