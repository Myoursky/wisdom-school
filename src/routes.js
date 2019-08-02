/**
 * 路由配置
 * @flow
 */
import React, { Component, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer';
import customMiddleWare from './redux/middleware/clientMiddleware';
import ApiClient from './utils/ApiClient';

const history = createBrowserHistory()
const middleware = routerMiddleware(history)
const client = new ApiClient();

const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      middleware,
      customMiddleWare(client)
    )
  )
)

const HomePage = lazy(() => import('./page/HomePage'));

export default class Root extends Component<?any> {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>  
            <Suspense fallback={<div>加载中...</div>}>
              <Switch>
                <Route path="/react/school/homepage" component={HomePage}/>
              </Switch>
            </Suspense>
          </Router>
        </ConnectedRouter>
      </Provider>
    )
  }
}