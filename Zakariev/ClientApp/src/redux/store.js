import { combineReducers, createStore } from "redux";
import editorReducer from "./editorReducer.js";
import ordersReducer from "./ordersReducer.js";
import productReducer from "./productReducer.js";
import productsReducer from "./productsReducer.js";
import basketReducer from "./basketReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    editor:editorReducer,
    orders:ordersReducer,
    product:productReducer,
    products:productsReducer,
    basket:basketReducer,
    header:headerReducer
});

let store = createStore(reducers);
export default store;
