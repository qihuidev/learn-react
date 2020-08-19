import styled from 'styled-components';
import logo from '../../static/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
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
  a {
    color: #333;
    font-size: 17px;
    padding: 0 15px;
    line-height: 58px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
    color: #969696;
  }
  .active {
    color: #ea6f5a;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  font-size: 17px;
  padding: 0 15px;
  line-height: 58px;
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  height: 100%;
  margin-left: 20px;
  .iconfont {
    position: absolute;
    top: 12px;
    right: 2px;
    width: 34px;
    height: 34px;
    color: #969696;
    font-size: 18px;
    line-height: 34px;
    text-align: center;
    border-radius: 34px;
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
  margin: 10px 0;
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

export const SearchInfo = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  width: 340px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, .18);
`;

export const SearchInfoTitle = styled.div`
  color: #999;
  font-size: 14px;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  cursor: pointer;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
  margin-top: 18px;
`;

export const SearchInfoItem = styled.div`
  float: left;
  color: #969696;
  padding: 5px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 3px;
  margin: 0 10px 15px 0;
  border: 1px solid #ddd;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58px;
`;

export const Button = styled.div`
  float: right;
  cursor: pointer;
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
