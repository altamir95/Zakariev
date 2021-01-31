import React from "react";
let AccordionCards = (props) => {
  return (
    <div  className="card  border-0  bg-transparent ">
      <div  className="card-header bg-transparent pl-0 border-0" id={"heading" + props.id}>
        <h5  className="mb-0 ">
          <button  className=" text-dark serif pl-0 nav-link btn-lg font-weight-bold  text-uppercase btn btn-link dropdown-toggle collapsed" type="button" data-toggle="collapse" data-target={"#collapse" + props.id} aria-expanded="false" aria-controls={"collapse" + props.id}>
            {props.main}
          </button>
        </h5>
      </div>
      <div key={"0" + props.id} id={"collapse" + props.id} className="collapse  " aria-labelledby="headingThree" data-parent="#accordionExample">
        <div  className="card-body   ">
          {props.minor.split(";").map((text, index) => (
            <p className=" " key={index + "text" + props.id}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AccordionCards;
