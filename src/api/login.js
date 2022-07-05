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
  return admin({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
/**
 * 请求用户信息
 * @returns
 */
export const getInfo = () => {
  return admin({
    url: 'sys/userInfo',
    method: 'GET'
  })
}
