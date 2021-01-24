import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import Preloader from "../common/Preloader"
import * as axios from "axios";
import { setProducts,setCurrentPage,setTotalProductsCount,countNumberPages,toggleIsFething } from "../../redux/productsReducer";

class ProductsAPIComponent extends React.Component {
  componentDidMount() {
    this.onPageChanged(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.setProducts([]);
    this.props.toggleIsFething(true);
    this.props.setCurrentPage(pageNumber);
    axios.get("/api/products/page=" + pageNumber + "&count=" + this.props.pageSize + "").then((response) => {
      this.props.toggleIsFething(false);
      this.props.setTotalProductsCount(response.data.countProducts);
      this.props.countNumberPages();
      this.props.setProducts(response.data.products);
    });
  };

  render() {
    return (
      <>
        {this.props.isFething===false?<Products pages={this.props.pages}  TotalProductsCount={this.props.TotalProductsCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} products={this.props.products} onPageChanged={this.onPageChanged} />: <Preloader />}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pageSize: state.products.pageSize,
    TotalProductsCount: state.products.TotalProductsCount,
    currentPage: state.products.currentPage,
    pages: state.products.pages,
    isFething: state.products.isFething,
  };
};

const ProductsConteiner = connect(mapStateToProps, {setProducts,setCurrentPage,setTotalProductsCount,countNumberPages,toggleIsFething})(ProductsAPIComponent);
export default ProductsConteiner;
