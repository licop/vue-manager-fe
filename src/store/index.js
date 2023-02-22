/**
 * Vuex状态管理
 */

import { createStore } from 'vuex'
import mutations from './mutations'
import storage from '../util/storage'

const state = {
  userInfo: "" || storage.getItem('userInfo')
}

export default createStore({
  state,
  mutations
})