import axios from 'axios'
import * as actionTypes from './constant'

const loginData = () => ({
  type: actionTypes.LOGIN,
  value: true
})

export const login = (account, password) => {
  return async (dispatch) => {
    await axios.get(`/api/login.json?account=${account}&password=${password}`);
    dispatch(loginData());
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})