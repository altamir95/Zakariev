import React from "react";
import Orders from "./Orders";
import LoginForm from "../common/LoginForm";
import { connect } from "react-redux";
import { setAuthorize, setOrders, countNumberPages, setCurrentPage, setTotalProductsCount, toggleIsFething, onchangeStateTextarea } from "../../redux/ordersReducer";
import { withRouter } from "react-router-dom";
import Preloader from "../common/Preloader";
import * as axios from "axios";

class OrdersAPIComponent extends React.Component {
  componentDidMount() {
    this.onPageChanged(1);
  }
  onPageChanged = (pageNumber) => {
    var that = this;
    this.props.toggleIsFething(true);
    this.props.setCurrentPage(pageNumber);
    axios({
      method: "GET",
      url: "/api/order/page=" + pageNumber + "&count=" + this.props.pageSize + "",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        console.log(response.data, "вот она проверка");
        this.props.toggleIsFething(false);
        this.props.setTotalProductsCount(response.data.countProducts);
        this.props.countNumberPages();
        this.props.setAuthorize(true);
        this.props.setOrders(response.data.orderInfos);
      })
      .catch(function (error) {
        that.props.toggleIsFething(false);
      });
  };

  authorization = () => {
    var that = this;
    var tokenKey = "accessToken";
    const formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("username", this.props.loginValue);
    formData.append("password", this.props.passwordValue);
    axios({
      method: "POST",
      url: "/token",
      headers: { Accept: "application/json" },
      data: formData,
    })
      .then(function (response) {
        sessionStorage.setItem(tokenKey, response.data.access_token);
        that.onPageChanged(1);
        that.props.setAuthorize(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return <>{this.props.isFething === true ? <Preloader /> : this.props.authorize === false ? <LoginForm authorization={this.authorization} loginValue={this.props.loginValue} passwordValue={this.props.passwordValue} onchangeStateTextarea={this.props.onchangeStateTextarea} /> : <Orders pages={this.props.pages} onPageChanged={this.onPageChanged} toggleIsFething={this.props.toggleIsFething} setTotalProductsCount={this.props.setTotalProductsCount} setCurrentPage={this.props.setCurrentPage} setOrders={this.props.setOrders} orders={this.props.orders} pageSize={this.props.pageSize} TotalProductsCount={this.props.TotalProductsCount} currentPage={this.props.currentPage} isFething={this.props.isFething} />} </>;
  }
}

let mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    pageSize: state.orders.pageSize,
    TotalProductsCount: state.orders.TotalProductsCount,
    currentPage: state.orders.currentPage,
    isFething: state.orders.isFething,
    authorize: state.orders.authorize,
    loginValue: state.orders.loginValue,
    pages: state.orders.pages,
    passwordValue: state.orders.passwordValue,
  };
};

let withURLDataComponentContainer = withRouter(OrdersAPIComponent);

const AdminOrdersConteiner = connect(mapStateToProps, { setAuthorize, countNumberPages, onchangeStateTextarea, setOrders, setCurrentPage, setTotalProductsCount, toggleIsFething })(withURLDataComponentContainer);

export default AdminOrdersConteiner;
