import React from "react";
import Editor from "./Editor";
import { connect } from "react-redux";
import { setProductsTamplate, countNumberPages, setAuthorize, onchangeStateTextarea, addCharacteristicToTemplate, deleteCharacteristicToTemplate, setProducts, setCurrentPage, setTotalProductsCount, toggleIsFething } from "../../redux/editorReducer";
import { withRouter } from "react-router-dom";
import * as axios from "axios";
import LoginForm from "../common/LoginForm";
import Preloader from "../common/Preloader";

class EditorAPIComponent extends React.Component {
  componentDidMount() {
    let that = this;
    axios
    .get("/api/TokenVerification")
    .then(() => {
      this.onPageChanged(1);
      this.props.toggleIsFething(true);
      this.props.setAuthorize(true);
    })
    .catch(function () {
      that.props.toggleIsFething(false);
    });
  }


  onPageChanged = (pageNumber) => {
    this.props.toggleIsFething(true);
    this.props.setCurrentPage(pageNumber);
    axios.get("/api/products/page=" + pageNumber + "&count=" + this.props.pageSize + "").then((response) => {
      this.props.toggleIsFething(false);
      this.props.setTotalProductsCount(response.data.countProducts);
      this.props.countNumberPages();
      this.props.setProducts(response.data.products);
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
        alert("Логин или пароль не верен")
        that.props.setAuthorize(false);
      });
  };

  sendForm = () => {
    var that = this;
    if (that.props.productsTemplate.id) {
      axios({
        method: "PUT",
        url: "/api/products",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
        data: {
          id: that.props.productsTemplate.id,
          name: that.props.productsTemplate.name,
          imagesUrl: that.props.productsTemplate.imagesUrl,
          shortInfo: that.props.productsTemplate.shortInfo,
          price: that.props.productsTemplate.price,
          productСharacteristics: that.props.productsTemplate.productСharacteristics,
        },
      })
        .then(function (response) {
          alert("Продукт изменен");
          that.onPageChanged(1);
        })
        .catch(function (error) {
          alert("Произошла ошибка");
          console.log(error);
        });
    } else {
      axios({
        method: "POST",
        url: "/api/products",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
        data: {
          name: that.props.productsTemplate.name,
          imagesUrl: that.props.productsTemplate.imagesUrl,
          shortInfo: that.props.productsTemplate.shortInfo,
          price: that.props.productsTemplate.price,
          productСharacteristics: that.props.productsTemplate.productСharacteristics,
        },
      })
        .then(function (response) {
          alert("Продукт добавлен");
          that.onPageChanged(1);
        })
        .catch(function (error) {
          alert("Произошла ошибка");
          console.log(error);
        });
    }
  };

  fillsProductsTamplate = (idProduct) => {
    axios.get("/api/products/" + idProduct).then((response) => {
      this.props.setProductsTamplate(response.data);
    });
  };

  emptiesProductsTamplate = () => {
    this.props.setProductsTamplate({
      id: null,
      name: "",
      imagesUrl: "",
      shortInfo: "",
      price: "",
      productСharacteristics: [
        {
          main: "",
          minor: "",
        },
      ],
    });
  };

  deleteProduct = (idProduct) => {
    let that = this;
    axios({
      method: "DELETE",
      url: "api/products/" + idProduct,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    })
      .then(function (response) {
        console.log("Продукт удален");
        that.onPageChanged(1);
      })
      .catch(function (error) {
        alert("Произошла ошибка");
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <>{this.props.isFething === true ? <Preloader /> : this.props.authorize === false ? <LoginForm authorization={this.authorization} loginValue={this.props.loginValue} passwordValue={this.props.passwordValue} onchangeStateTextarea={this.props.onchangeStateTextarea} /> : <Editor orders={this.props.orders} pages={this.props.pages} setOrdersFromData={this.setOrdersFromData} deleteProduct={this.deleteProduct} emptiesProductsTamplate={this.emptiesProductsTamplate} putForm={this.props.putForm} isFething={this.props.isFething} sendForm={this.sendForm} fillsProductsTamplate={this.fillsProductsTamplate} productsTemplate={this.props.productsTemplate} onchangeStateTextarea={this.props.onchangeStateTextarea} addCharacteristicToTemplate={this.props.addCharacteristicToTemplate} deleteCharacteristicToTemplate={this.props.deleteCharacteristicToTemplate} TotalProductsCount={this.props.TotalProductsCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} products={this.props.products} onPageChanged={this.onPageChanged} />} </>;      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    productsTemplate: state.editor.productsTemplate,
    products: state.editor.products,
    pageSize: state.editor.pageSize,
    TotalProductsCount: state.editor.TotalProductsCount,
    currentPage: state.editor.currentPage,
    isFething: state.editor.isFething,
    authorize: state.editor.authorize,
    loginValue: state.editor.loginValue,
    passwordValue: state.editor.passwordValue,
    pages: state.editor.pages,
  };
};

let withURLDataComponentContainer = withRouter(EditorAPIComponent);

const AdminConteiner = connect(mapStateToProps, { countNumberPages, setProductsTamplate, setAuthorize, onchangeStateTextarea, addCharacteristicToTemplate, deleteCharacteristicToTemplate, setProducts, setCurrentPage, setTotalProductsCount, toggleIsFething })(withURLDataComponentContainer);

export default AdminConteiner;
