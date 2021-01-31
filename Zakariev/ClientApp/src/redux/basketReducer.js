let initialState = {
  isFething: true,
  basketProducts: {productsWithQuantities:[]},
  phoneNum: null,
};

const basketReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "SET-BASKET-PRODUCTS":
      stateCopy.basketProducts = action.updatedProducts;
      break;
    case "DELETE-PRODUCT-FROM-LOCALSTORAGE":
      let cookieProductsForDelete = JSON.parse(localStorage.getItem("mybasket"));
      let index = cookieProductsForDelete.indexOf(parseInt(action.deletedProductId, 10));
      cookieProductsForDelete.splice(index, 1);
      localStorage.setItem("mybasket", JSON.stringify(cookieProductsForDelete));
      break;
    case "ADD-PRODUCT-IN-LOCALSTORAGE":
      let cookieProductsForAdd = JSON.parse(localStorage.getItem("mybasket"));
      cookieProductsForAdd.push(action.deletedProductId);
      localStorage.setItem("mybasket", JSON.stringify(cookieProductsForAdd));
      break;
    case "TOGGLE-IS-FETHING":
      stateCopy.isFething = action.isFething;
      break;
    case "ONCHANGE-STATE-TEXTAREA":
      switch (action.keyName) {
        case "num":
          stateCopy.phoneNum = action.value;
          break;
        default:
          break;
      }
      break;
    default:
  }

  return stateCopy;
};

export const setBasketProducts = (updatedProducts) => ({ type: "SET-BASKET-PRODUCTS", updatedProducts });
export const deleteProductFromLocalStorage = (deletedProductId) => ({ type: "DELETE-PRODUCT-FROM-LOCALSTORAGE", deletedProductId });
export const addProductInLocalStorage = (deletedProductId) => ({ type: "ADD-PRODUCT-IN-LOCALSTORAGE", deletedProductId });
export const toggleIsFething = (isFething) => ({ type: "TOGGLE-IS-FETHING", isFething: isFething });
export const onchangeStateTextarea = (value, keyName, keyIndex) => ({ type: "ONCHANGE-STATE-TEXTAREA", keyName, value, keyIndex });

export default basketReducer;
