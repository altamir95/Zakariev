let initialState = {
  product: { productСharacteristics: [] },
  productsInBasket: [],
  isFething: true,
};

const productReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "SET-PRODUCT":
      stateCopy.product = action.product;
      break;
    case "PUT-PRODUCT-IN-BASKET":
      if (JSON.parse(localStorage.getItem("mybasket"))==null) {
        localStorage.setItem("mybasket", JSON.stringify([]));
      }
      let arrayProductsInBasket = JSON.parse(localStorage.getItem("mybasket"));
      
      arrayProductsInBasket.push(action.idProduct);
      localStorage.setItem("mybasket", JSON.stringify(arrayProductsInBasket));
      stateCopy.productsInBasket = arrayProductsInBasket;
      break;
    case "TOGGLE-IS-FETHING":
      stateCopy.isFething = action.isFething;
      break;
    default:
      console.log("НЕ ПОЛУЧИЛОСЬ");
  }
  return stateCopy;
};

export const setProduct = (product) => ({ type: "SET-PRODUCT", product });
export const toggleIsFething = (isFething) => ({ type: "TOGGLE-IS-FETHING", isFething: isFething });
export const putProductInBasket = (idProduct) => ({ type: "PUT-PRODUCT-IN-BASKET", idProduct });

export default productReducer;
