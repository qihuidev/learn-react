import axios from 'axios'
import * as actionTypes from './constant'

const detailData = (data) => ({
  type: actionTypes.DETAIL_DATA,
  detail: data.detail
})

export const getDetailData = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/detail.json?id=${id}`);
    dispatch(detailData(data));
  }
}