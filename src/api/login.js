import admin from '../utils/request'

/**
 * 请求验证码
 * @returns
 */
export const getCodes = () => {
  return admin({ url: '/captcha', method: 'GET' })
}

/**
 * 请求登录
 * @param {Object} data 
 * @returns 
 */
export const getLogin = (data) => {
  return admin({ url: '', method: 'POST', data })
}
