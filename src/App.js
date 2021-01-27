import React from 'react'
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Brand from './Brand';
import Products from './Products';
import Invoicing from './Invoicing';
import InvoicingProducts from './invoicingproducts';

const App = () => {


  return (
    <Switch>
      <Route exact path='/'>
        <Brand/>
      </Route>
      <Route exact path={`/Products/:name`} component={Products} />
      <Route exact path='/invoicing' component={Invoicing} />
      <Route exact path='/invoicingproducts' component={InvoicingProducts} />
    </Switch>
  );
}

export default App;
