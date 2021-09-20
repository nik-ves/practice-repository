import { Route, Switch, Redirect } from "react-router-dom"; // switch makes sure that only one of the routes will be active at the time

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

// setting path as "/" and adding exact will setup our-domain.com as a welcome/inital page

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome"> 
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome component
// our-domain.com/products => Products component
// our-domain.com/product-detail/<anything> => Products component
