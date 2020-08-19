import { fromJS } from 'immutable'
import * as actionTypes from './constant'

const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('isLogin', action.value)
    case actionTypes.LOGOUT:
      return state.set('isLogin', action.value)
    default:
      return state
  }
}