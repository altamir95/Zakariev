import "./App.css";
import Header from "./components/Header/HeaderConteiner.jsx";
import Products from "./components/Products/ProductsConteiner.jsx";
import Product from "./components/Product/ProductConteiner.jsx";
import Editor from "./components/Editor/EditorConteiner.jsx";
import Basket from "./components/Basket/BasketConteiner";
import Footer from "./components/Footer/Footer.jsx";
import Start from "./components/Start/Start.jsx";
import Orders from "./components/Orders/OrdersConteiner.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App(props) {
  console.log(props,"App")
  return (
    <main className="d-flex flex-column vh-100">
      <BrowserRouter>
      <Header />
      <section className="flex-grow-1 d-flex flex-column">
          <Route  path="/product/:id" render={() => <Product store={props.store} />} />
          <Route exact path="/basket" render={() => <Basket store={props.store} />} />
          <Route exact path="/products" render={() => <Products store={props.store} />} />
          <Route exact path="/" render={() => <Start />} />
          <Route exact  path="/orders" render={() => <Orders />} />
          <Route exact path="/editor" render={() => <Editor store={props.store} />} />
      </section>
      <Footer />
      </BrowserRouter>
    </main>
  );
}
export default App;
