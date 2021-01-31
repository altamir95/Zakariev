let initialState = {
  orders: null,
  products: [],
  productsTemplate: {
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
  },
  pageSize: 6,
  authorize: false,
  TotalProductsCount: 0,
  pages: [],
  currentPage: 1,
  isFething: true,
  loginValue: null,
  passwordValue: null,
};
const editorReducer = (state = initialState, action) => {
  var stateCopy = { ...state };
  stateCopy.productsTemplate = { ...stateCopy.productsTemplate };
  stateCopy.orders = { ...stateCopy.orders };
  switch (action.type) {
    case "ONCHANGE-STATE-TEXTAREA":
      switch (action.keyName) {
        case "name":
          stateCopy.productsTemplate.name = action.value;
          break;
        case "shortInfo":
          stateCopy.productsTemplate.shortInfo = action.value;
          break;
        case "imagesUrl":
          stateCopy.productsTemplate.imagesUrl = action.value;
          break;
        case "price":
          stateCopy.productsTemplate.price = action.value;
          break;
        case "main":
          stateCopy.productsTemplate.productСharacteristics[action.keyIndex].main = action.value;
          break;
        case "minor":
          stateCopy.productsTemplate.productСharacteristics[action.keyIndex].minor = action.value;
          break;
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

    case "ADD-CHARACTERISTIC-TO-TEMPLATE":
      stateCopy.productsTemplate.productСharacteristics.push({ main: "", minor: "" });
      break;

    case "DELETE-CHARACTERISTIC-TO-TEMPLATE":
      if (state.productsTemplate.productСharacteristics.length > 1) {
        stateCopy.productsTemplate.productСharacteristics.splice(action.colIndex, 1);
      }
      break;
    case "COUNT-THE-NUMBER-OF-PAGES":
      let pageCount = Math.ceil(stateCopy.TotalProductsCount / stateCopy.pageSize);

      let pages = [];
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
      stateCopy.pages = pages;
      break;

    case "SET-PRODUCTS":
      stateCopy.products = action.newProducts;
      break;
    case "SET-PRODUCTS-TAMPLATE":
      stateCopy.productsTemplate = action.newProductsTamplate;
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
    case "SET-AUTHORIZE":
      stateCopy.authorize = action.boolean;
      break;

    default:
  }
  return stateCopy;
};

export const onchangeStateTextarea = (value, keyName, keyIndex) => ({ type: "ONCHANGE-STATE-TEXTAREA", keyName, value, keyIndex });
export const addCharacteristicToTemplate = (colIndex) => ({ type: "ADD-CHARACTERISTIC-TO-TEMPLATE", colIndex });
export const deleteCharacteristicToTemplate = () => ({ type: "DELETE-CHARACTERISTIC-TO-TEMPLATE" });
export const countNumberPages = () => ({ type: "COUNT-THE-NUMBER-OF-PAGES" });

export const setProducts = (newProducts) => ({ type: "SET-PRODUCTS", newProducts });
export const setProductsTamplate = (newProductsTamplate) => ({ type: "SET-PRODUCTS-TAMPLATE", newProductsTamplate });
export const setAuthorize = (boolean) => ({ type: "SET-AUTHORIZE", boolean });

export const setCurrentPage = (currentPage) => ({ type: "SET-CURRENT-PAGE", currentPage });

export const setTotalProductsCount = (countProducts) => ({ type: "SET-TOTAL-PRODUCTS-COUNT", countProducts: countProducts });

export const toggleIsFething = (isFething) => ({ type: "TOGGLE-IS-FETHING", isFething: isFething });

export default editorReducer;
