import styled from 'styled-components';
import logo from '../../static/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 58px;
  background-image: url(${logo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 100px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    top: 10px;
    right: 0;
    width: 38px;
    height: 38px;
    color: #969696;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 38px;
    &.focused {
      color: #fff;
      background-color: #777;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 240px;
  height: 38px;
  border: none;
  outline: none;
  color: #666;
  font-size: 14px;
  padding: 0 44px 0 20px;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #eee;
  &.slide-enter {
    transition: all .34s ease-out;
  }
  &.slide-enter-active {
    width: 340px;
  }
  &.slide-exit {
    transition: all .34s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 340px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58px;
`;

export const Button = styled.div`
  float: right;
  font-size: 14px;
  padding: 0 20px;
  margin-top: 10px;
  margin-right: 20px;
  line-height: 38px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
    .iconfont {
      font-size: 48px;
    }
  }
`;
