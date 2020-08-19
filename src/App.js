import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import Header from './common/header/index';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';
import Detail from './pages/detail';

import GlobalStyle from './style';
import GlobalStyleFont from './static/iconfont/iconfont';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalStyleFont />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/write" component={Write} />
          <Route exact path="/detail/:id" component={Detail} />
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
