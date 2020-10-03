import React from 'react';
import { MainLayout } from './layout/main'

import { Provider } from 'react-redux'
import initializeStore from './store/init'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { linksRoute } from './links'

function App() {
  return (
    <Provider store={initializeStore}>
    <Router>
      <MainLayout>
        <Switch>
          {
            linksRoute.map( (link, index) => {
              return (
                <Route key={index} path={link.url}>
                  <link.page />
                </Route>
              )
            })
          }
          <Redirect to='/1' />
        </Switch>
      </MainLayout>
    </Router>
    </Provider>
  );
}

export default App
