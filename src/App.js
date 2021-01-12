//libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//layout
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

//components
import ScrollToTop from "./components/ScrollToTop";

//pages
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import YourBag from "./pages/YourBag/YourBag";

//assets
import "./App.css";

const App = () => {
  return (
    <Router basename="https://witaaldi.github.io/nike_store/">
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product-detail/:itemID" component={ProductDetail} />
        <Route path="/your-bag" component={YourBag} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
