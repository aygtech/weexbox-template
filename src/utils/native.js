/*
 * @Author: remi.zhang
 * @Date: 2018-12-11 11:04:31
 * @Last Modified by: remi.zhang
 * @Last Modified time: 2019-01-23 14:54:16
 */
// const modal = weex.requireModule('wb-modal')
// const _network = weex.requireModule('wb-network')
const _router = weex.requireModule('wb-router')
// const _location = weex.requireModule('wb-location')

const { env } = weex.config

let domain = 'https://weexbox.surge.sh'
const now = new Date().getTime()
const end = new Date('2019-01-26 12:00:00').getTime()
if (now >= end) {
  domain = 'https://aygtech.github.io/weexbox'
}
// weexbox 域名地址
export const weexBoxDomain = domain
// weexbox module域名地址
export const weexBoxUrl = `${domain}/guide/module.html`

/**
 * 屏幕高度
 */
export const screenHeight = () => {
  const height = env.deviceHeight / env.deviceWidth * 750
  return Math.ceil(height)
}

// 页面路由
export const router = {
  /**
   * 打开页面
   * @param {object} option - 参数
   * @param {string} option.url - 下一个weex/web的路径
   * @param {string} [option.name] - 页面名称。内置"weex"、"web"，其他路由需要原生先注册
   * @param {string} [option.type=push] - 下一个weex/web的路径
   * @param {boolean} [option.navBarHidden=false] - 是否隐藏导航栏
   * @param {object} [option.params={}] - // 需要传到下一个页面的数据
   */
  open(option) {
    const _option = {
      name: 'weex',
      url: null,
      type: 'push',
      navBarHidden: false,
      params: {},
    }
    const param = Object.assign(_option, option)
    _router.open(param)
  },
  /**
   * 关闭页面
   * @param {string} [level=1] - 关闭页面的级数
   */
  close(level = 1) {
    _router.close(level)
  },
  /**
   * 刷新weex页面
   */
  refresh() {
    _router.refresh()
  },
  /**
   * 获取页面参数
   */
  getParams() {
    return _router.getParams()
  },
}

export default {
  weexBoxDomain,
  weexBoxUrl,
  router,
  screenHeight,
}
