import React from "react";
import { connect } from "react-redux";
import Basket from "./Basket";
import Preloader from "../common/Preloader";
import { updateBasketCount } from "../../redux/headerReducer";
// updateBasketCount={this.props.updateBasketCount}
import * as axios from "axios";
import { setBasketProducts, deleteProductFromLocalStorage,addProductInLocalStorage, toggleIsFething, onchangeStateTextarea } from "../../redux/basketReducer";

class BasketAPIComponent extends React.Component {
  basketProductUrlCreator = () => {
    var url = "/api/products/basketproducts?";
    if(localStorage.getItem("mybasket")){
      JSON.parse(localStorage.getItem("mybasket")).forEach((element) => {
      url = url + "array=" + element + "&";
    });
    return url;
    }else{
      this.props.toggleIsFething(false);
    }
    
  };

  componentDidMount() {
    axios.get(this.basketProductUrlCreator()).then((response) => {
      this.props.setBasketProducts(response.data);
      this.props.toggleIsFething(false);
    });
  }

  updateBasket = (type, product) => {
    this.props.toggleIsFething(true);
    switch (type) {
      case "DELETE":
        this.props.deleteProductFromLocalStorage(product);
        break;
      case "ADD":
        this.props.addProductInLocalStorage(product);
        break;
    }
    axios.get(this.basketProductUrlCreator()).then((response) => {
      this.props.setBasketProducts(response.data);
      this.props.toggleIsFething(false);
      this.props.updateBasketCount();
    });
  };

  toOrder = () => {
    this.props.toggleIsFething(true);
    let that = this;
    axios
      .post("/api/order", {
        phoneNum: that.props.phoneNum,
        orderProducts: JSON.parse(localStorage.getItem("mybasket")).map((u) => {
          return { productId: u};
        }),
      })
      .then(function (response) {
        alert("Заказ оформлен, ждите звонка");
        localStorage.setItem("mybasket", JSON.stringify([]));
        that.props.setBasketProducts({productsWithQuantities:[]});
        that.props.updateBasketCount();
        that.props.toggleIsFething(false);
      });
  };

  render() {
    return <>{this.props.isFething === false ? <Basket updateBasket={this.updateBasket} toOrder={this.toOrder} phoneNum={this.props.phoneNum} basketProducts={this.props.basketProducts} onchangeStateTextarea={this.props.onchangeStateTextarea} /> : <Preloader />}</>;
  }
}

let mapStateToProps = (state) => {
  return {
    basketProducts: state.basket.basketProducts,
    isFething: state.basket.isFething,
    phoneNum: state.basket.phoneNum,
  };
};

const BasketConteiner = connect(mapStateToProps, { deleteProductFromLocalStorage,addProductInLocalStorage, onchangeStateTextarea, setBasketProducts, updateBasketCount, toggleIsFething })(BasketAPIComponent);
export default BasketConteiner;
