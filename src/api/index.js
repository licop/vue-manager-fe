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
      mock: true
    })
  }
  
}