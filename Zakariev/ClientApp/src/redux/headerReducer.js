let initialState = {
  basketCount: 0,
};

const headerReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "UPDATE-BASKET-COUNT":
      if (localStorage.getItem("mybasket")) {
        stateCopy.basketCount = JSON.parse(localStorage.getItem("mybasket")).length;
      }

      break;

    default:
  }

  return stateCopy;
};

export const updateBasketCount = () => ({ type: "UPDATE-BASKET-COUNT" });

export default headerReducer;
