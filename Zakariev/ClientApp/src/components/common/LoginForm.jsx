import React from "react";

function LoginForm(props) {
  let onchangeStateTextarea = (event) => {
    props.onchangeStateTextarea(event.target.value, event.target.name);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 justify-content-center">
        <div className="px-4 py-3 col">
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail1">Логин</label>
            <input onChange={onchangeStateTextarea} value={props.loginValue|| ''} name="login"  className="form-control" id="exampleDropdownFormEmail1"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword1">Пароль</label>
            <input onChange={onchangeStateTextarea} value={props.passwordValue|| ''} name="password"  type="password" className="form-control" id="exampleDropdownFormPassword1"></input>
          </div>
          <button
            onClick={() => {
              props.authorization();
            }}
            className="btn btn-primary"
          >
            Авторизироваться
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
