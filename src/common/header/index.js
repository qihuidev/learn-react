import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={280}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.inputFocus}
                onBlur={this.props.inputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>
              &#xe63e;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    focused: state.header.focused,
  };
};

const mapDispatch = (dispatch) => {
  return {
    inputFocus() {
      dispatch(actionCreators.focus());
    },
    inputBlur() {
      dispatch(actionCreators.blur());
    },
  };
};

export default connect(mapState, mapDispatch)(Header);
