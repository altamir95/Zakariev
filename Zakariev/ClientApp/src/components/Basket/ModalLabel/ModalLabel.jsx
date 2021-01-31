import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

let ModalLabel = (props) => {
  return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel font-weight-light">
                Введите свой <span className="font-weight-bold">номер телефона</span> или <span className="font-weight-bold">email</span> чтоб мы могли связаться с вами для дальнейшего офрмления заказа
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={props.phoneNum || ""} onChange={(e) => props.onchangeStateTextarea(e.target.value || "", "num")} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Закрыть
              </button>

              <button type="button" onClick={() => props.toOrder()} data-dismiss="modal" className="btn btn-success">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ModalLabel;
