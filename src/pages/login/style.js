import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  top: 58px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f1f1f1;
`;

export const LoginInfo = styled.div`
  width: 280px;
  padding: 20px;
  margin: 80px auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  input {
    color: #777;
    height: 34px;
    outline: none;
    font-size: 16px;
    padding: 0 10px;
    line-height: 34px;
    margin-bottom: 10px;
    border: 1px solid #eee;
  }
`;

export const Button = styled.div`
  color: #fff;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 28px;
  line-height: 40px;
  text-align: center;
  border-radius: 40px;
  background-color: #3194d0;
  &:hover {
    background-color: #187cb7;
  }
`;