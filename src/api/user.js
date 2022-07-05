import admin from '../utils/request'

/**
 * 请求菜单列表
 * @returns
 */
export const getNav = () => {
  return admin({
    url: '/sys/menu/nav',
    method: 'GET'
  })
}
