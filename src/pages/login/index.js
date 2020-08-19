import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginWrapper, LoginInfo, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
  render() {
    const { isLogin, login } = this.props;
    if (isLogin) {
      return <Redirect to="/" />;
    } else {
      return (
        <LoginWrapper>
          <LoginInfo>
            <input placeholder="账号" ref={(input) => (this.account = input)} />
            <input
              type="password"
              placeholder="密码"
              ref={(input) => (this.password = input)}
            />
            <Button onClick={() => login(this.account, this.password)}>
              登录
            </Button>
          </LoginInfo>
        </LoginWrapper>
      );
    }
  }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin']),
  };
};

const mapDispatch = (dispatch) => {
  return {
    login(accountElem, passwordElem) {
      dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    },
  };
};

export default connect(mapState, mapDispatch)(Login);
