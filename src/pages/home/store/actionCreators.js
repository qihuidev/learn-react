import axios from 'axios'
import * as actionTypes from './constant'

const homeData = (data) => ({
  type: actionTypes.HOME_DATA,
  list: data.data.list,
  recommend: data.data.recommend,
  writer: data.data.writer
})

export const getHomeData = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/homeList.json');
    dispatch(homeData(data));
  }
}