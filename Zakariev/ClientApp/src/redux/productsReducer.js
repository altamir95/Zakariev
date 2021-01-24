let initialState = {
  products: [],
  pageSize: 2,
  TotalProductsCount: 0,
  currentPage: 1,
  pages: [],
  isFething: true,
};

const productsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "SET-PRODUCTS":
      stateCopy.products = action.newProducts;
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
      break;
    default:
      console.log("НЕ ПОЛУЧИЛОСЬ");
  }
  return stateCopy;
};

export const setProducts = (newProducts) => ({ type: "SET-PRODUCTS", newProducts });

export const setCurrentPage = (currentPage) => ({ type: "SET-CURRENT-PAGE", currentPage });

export const setTotalProductsCount = (countProducts) => ({ type: "SET-TOTAL-PRODUCTS-COUNT", countProducts: countProducts });

export const countNumberPages = () => ({ type: "COUNT-THE-NUMBER-OF-PAGES" });

export const toggleIsFething = (isFething) => ({ type: "TOGGLE-IS-FETHING", isFething: isFething });

export default productsReducer;
