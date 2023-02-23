/**
 * api 管理
 */
import request from "../util/request"

export default {
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
      mock: false
    })
  },
  noticeCount() {
    return request({
      url: '/leave/count',
      method: 'get',
      data: {},
      mock: false
    })
  },
  getMenuList() {
    return request({
      url: '/menu/list',
      method: 'get',
      data: {},
      mock: false
    })
  }
}
