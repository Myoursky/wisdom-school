/**
 * 路由配置
 * @flow
 */
import React, { Component, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './redux/reducer'
import customMiddleWare from './redux/middleware/clientMiddleware';
import ApiClient from './utils/ApiClient';
import Loading from 'components/Loading';

const history = createBrowserHistory()
const middleware = routerMiddleware(history)
const client = new ApiClient();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      middleware,
      customMiddleWare(client)
    )
  )
)

const HomePage = lazy(() => import('./page/HomePage'));
const BindingCard = lazy(() => import('./page/Binding'));
const BindingList = lazy(() => import('./page/List'));
const RecordList = lazy(() => import('./page/Records'));
const NoPage = lazy(() => import('./page/NoPage'));

export default class Root extends Component<?any> {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<Loading value="加载中..."/>}>
            <Switch>
              <Route exact path="/wx" component={HomePage}/>
              <Route path="/wx/react/school/binding" component={BindingCard}/>
              <Route path="/wx/react/school/list" component={BindingList}/>
              <Route path="/wx/react/school/records" component={RecordList}/>
              <Route path="/wx/react/school/nopage" component={NoPage}/>
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    )
  }
}