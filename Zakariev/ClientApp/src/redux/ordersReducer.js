let initialState = {
  orders: [
    {
      id: null,
      phoneNum: null,
      productInfos: [
        {
          productId: null,
          nameProduct: "",
        },
      ],
    },
  ],
  pageSize: 3,
  TotalProductsCount: 0,
  currentPage: 1,
  pages: [],
  isFething: true,
  authorize: false,
  loginValue: null,
  passwordValue: null,
};
const OrdersReducer = (state = initialState, action) => {
  var stateCopy = { ...state };
  // stateCopy.orders = { ...stateCopy.orders };
  switch (action.type) {
    case "SET-ORDERS":
      stateCopy.orders = action.newOrders;
      break;
    case "SET-AUTHORIZE":
      stateCopy.authorize = action.boolean;
      break;
    case "SET-CURRENT-PAGE":
      stateCopy.currentPage = action.currentPage;
      break;
    case "SET-TOTAL-PRODUCTS-COUNT":
      stateCopy.TotalProductsCount = action.countProducts;
      break;
    case "TOGGLE-IS-FETHING":
      stateCopy.isFething = action.isFething;
      break;
    case "COUNT-THE-NUMBER-OF-PAGES":
      let pageCount = Math.ceil(stateCopy.TotalProductsCount / stateCopy.pageSize);
      let pages = [];
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
      stateCopy.pages = pages;
      console.log("фдд пщщв")
      break;
    case "ONCHANGE-STATE-TEXTAREA":
      switch (action.keyName) {
        case "login":
          stateCopy.loginValue = action.value;
          break;
        case "password":
          stateCopy.passwordValue = action.value;
          break;
        default:
          break;
      }
      break;

    default:
      console.log("There is no such action in the despatch");
  }
  return stateCopy;
};

export const onchangeStateTextarea = (value, keyName) => ({ type: "ONCHANGE-STATE-TEXTAREA", keyName, value });
export const setOrders = (newOrders) => ({ type: "SET-ORDERS", newOrders });
export const countNumberPages = () => ({ type: "COUNT-THE-NUMBER-OF-PAGES" });
export const setAuthorize = (boolean) => ({ type: "SET-AUTHORIZE", boolean });
export const setCurrentPage = (currentPage) => ({ type: "SET-CURRENT-PAGE", currentPage });
export const setTotalProductsCount = (countProducts) => ({ type: "SET-TOTAL-PRODUCTS-COUNT", countProducts: countProducts });
export const toggleIsFething = (isFething) => ({ type: "TOGGLE-IS-FETHING", isFething: isFething });

export default OrdersReducer;
