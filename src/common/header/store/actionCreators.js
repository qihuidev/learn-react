import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './constant'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const focus = () => ({
  type: actionTypes.FOCUS
})

export const blur = () => ({
  type: actionTypes.BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

export const getList = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/headerList.json')
    dispatch(changeList(data.data))
  }
}