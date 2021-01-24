import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {updateBasketCount } from "../../redux/headerReducer";

class HeaderAPIComponent extends React.Component {

  componentDidMount() {
    this.props.updateBasketCount();
  }
  
  render() {
    return <><Header updateBasketCount={this.props.updateBasketCount} basketCount={this.props.basketCount}/> </>;
  }
}

let mapStateToProps = (state) => {
  return {
    basketCount: state.header.basketCount
  };
};

const HeaderConteiner = connect(mapStateToProps, { updateBasketCount})(HeaderAPIComponent);
export default HeaderConteiner;
