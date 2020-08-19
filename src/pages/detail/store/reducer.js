import { fromJS } from 'immutable'
import * as actionTypes from './constant'

const defaultState = fromJS({
  detail: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_DATA:
      return state.merge({
        detail: fromJS(action.detail)
      })
    default:
      return state
  }
}