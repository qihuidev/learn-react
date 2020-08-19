import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';

class Header extends PureComponent {
  render() {
    const { focused, list, isLogin, inputFocus, inputBlur, logout } = this.props;
    return (
      < HeaderWrapper >
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/' className="left active">首页</Link>
          <Link to='' className="left">下载App</Link>
          {
            isLogin ? <NavItem className="right" onClick={logout}>退出</NavItem> : <Link to='/login' className="right">登录</Link>
          }
          <Link to='' className="right">Aa</Link>
          <SearchWrapper>
            <CSSTransition timeout={280} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => inputFocus(list)}
                onBlur={inputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused' : 'iconfont'}>
              &#xe63e;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='write'>
            <Button className="writting">写文章</Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper >
    );
  }

  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      mouseEnter,
      mouseLeave,
      changePage,
    } = this.props;
    const pageList = [];
    const newList = list.toJS();

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                changePage(page, totalPage);
              }}
            >
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin']),
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  };
};

const mapDispatch = (dispatch) => {
  return {
    inputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.focus());
    },
    inputBlur() {
      dispatch(actionCreators.blur());
    },
    logout() {
      dispatch(loginActionCreators.logout())
    },
    mouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    mouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    changePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        page = 1;
        dispatch(actionCreators.changePage(page));
      }
    },
  };
};

export default connect(mapState, mapDispatch)(Header);
