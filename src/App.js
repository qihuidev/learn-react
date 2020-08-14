import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Header from './common/header/index';

import GlobalStyle from './style';
import GlobalStyleFont from './static/iconfont/iconfont';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalStyleFont />
      <Provider store={store}>
        <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
