import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { setProduct, toggleIsFething, putProductInBasket } from "../../redux/productReducer";
import { updateBasketCount } from "../../redux/headerReducer";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import Preloader from "../common/Preloader";

class ProductAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFething(true);
    axios.get("/api/products/" + this.props.match.params.id).then((response) => {
      console.log(response.data, "ответ");
      this.props.setProduct(response.data);
      this.props.toggleIsFething(false);
    });
  }
  render() {
    return <>{this.props.isFething === false ? <Product product={this.props.product} putProductInBasket={this.props.putProductInBasket} updateBasketCount={this.props.updateBasketCount} /> : <Preloader />}</>;
  }
}

let mapStateToProps = (state) => {
  return {
    productsInBasket: state.product.productsInBasket,
    product: state.product.product,
    isFething: state.product.isFething,
  };
};

let withURLDataComponentContainer = withRouter(ProductAPIComponent);

const ProductConteiner = connect(mapStateToProps, { updateBasketCount, setProduct, toggleIsFething, putProductInBasket })(withURLDataComponentContainer);
export default ProductConteiner;
