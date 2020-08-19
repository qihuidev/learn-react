import { fromJS } from 'immutable'
import * as actionTypes from './constant'

const defaultState = fromJS({
  list: [],
  recommend: [],
  writer: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HOME_DATA:
      return state.merge({
        list: fromJS(action.list),
        recommend: fromJS(action.recommend),
        writer: fromJS(action.writer),
      })
    default:
      return state
  }
}