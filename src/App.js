import React, { Fragment } from 'react';
import Header from './common/header/index'
import GlobalStyle from './style'
import GlobalStyleFont from './static/iconfont/iconfont'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalStyleFont />
      <Header />
    </Fragment>
  );
}

export default App;
