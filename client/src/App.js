
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import About from './Containers/About';
import Order from './Containers/Order/Order';
import Product from './Containers/Product/Product';
import ProductEdit from './Containers/Product/ProductEdit';
import NotFound from './Containers/Error/NotFound';


class App extends Component {

renderRouter(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/product/add" component={ProductEdit} />
      <Route exact path="/product/edit/:id" component={ProductEdit} />
      <Route component={NotFound} />
    </Switch>
  );
}

  render() {
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    );
  }
}

export default App;
