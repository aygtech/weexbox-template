const config = {
  develop: {
    // 从本机加载图片，只有在调试的时候有效
    imagePublicPath: null,
  },
  test: {
    // 从网络加载图片
    imagePublicPath: 'https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy',
  },
  preRelease: {
    // 从app加载图片
    imagePublicPath: 'bundle://',
  },
  release: {
    // 从网络加载图片
    imagePublicPath: 'https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy',
  },
}

module.exports = config
