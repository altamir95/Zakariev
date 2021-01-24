let initialState = {
  basketCount: 0,
};

const headerReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "UPDATE-BASKET-COUNT":
      let localStorageProducts = JSON.parse(localStorage.getItem("mybasket"));
      if (localStorageProducts) {
        stateCopy.basketCount = localStorageProducts.length;
      }

      break;

    default:
      console.log("НЕ ПОЛУЧИЛОСЬ UPDATE-BASKET-COUNT");
  }

  return stateCopy;
};

export const updateBasketCount = () => ({ type: "UPDATE-BASKET-COUNT" });

export default headerReducer;
