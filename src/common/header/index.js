import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
    this.inputFocus = this.inputFocus.bind(this);
    this.inputBlur = this.inputBlur.bind(this);
  }

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
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.inputFocus}
                onBlur={this.inputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>
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

  inputFocus() {
    this.setState({
      focused: true,
    });
  }

  inputBlur() {
    this.setState({
      focused: false,
    });
  }
}

export default Header;
