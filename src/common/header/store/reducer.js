import * as actionTypes from './constant'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOCUS:
      return { focused: true }
    case actionTypes.BLUR:
      return { focused: false }
    default:
      return state
  }
}