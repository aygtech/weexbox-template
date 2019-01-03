<template>
  <scroller class="wrap">
    <text class="title">请求接口(request)</text>
    <div class="button" @click="request">
      <text class="button-text">请求接口</text>
    </div>
    <div class="empty"></div>

    <!-- <text class="title">文件上传(upload)</text>
    <div class="button" @click="upload">
      <text class="button-text">文件上传</text>
    </div>
    <div class="empty"></div> -->
  </scroller>
</template>

<script>
import { router, weexBoxUrl } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const network = weex.requireModule('wb-network')
const modal = weex.requireModule('wb-modal')
// const params = router.getParams()
const params = {
  title: 'wb-network',
  url: 'wb-network',
}

export default {
  components: {
  },
  data() {
    return {
    }
  },
  created() {
    if (params) {
      navigator.setCenterItem({
        text: params.title,
        color: '3d3d3d',
      }, () => {})
    }
    navigator.setRightItems([{
      text: '查看文档',
      color: '3d3d3d',
    }], () => {
      router.open({
        name: 'web',
        title: params.title,
        url: `${weexBoxUrl}#${params.url}`,
      })
      // router.open({
      //   url: 'page/web.js',
      //   params: {
      //     title: params.title,
      //     url: params.url
      //   }
      // })
    })
  },
  methods: {
    request() {
      network.request({
        // 请求的URL
        url: 'https://weexbox.com/xxx/xxx',
        // 请求时使用的方法，默认是 get
        method: 'post',
        // 请求头
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        // 发送的 URL/Body 参数
        params: {
          ID: 12345,
        },
        // 响应类型, json 或 text，默认 json
        responseType: 'json',
      }, () => {
        modal.showToast({
          text: '请求完成',
          duration: 1.5,
        })
      })
    },
    upload() {
      network.upload({
        // 请求的URL
        url: 'https://weexbox.com/xxx/xxx',
        // 本地文件路径数组
        files: ['/docment/1.png'],
      }, () => {
        // 完成的callback
        modal.showToast({
          text: '完成的callback',
          duration: 1.5,
        })
      }, () => {
        // 进度的callback
        modal.showToast({
          text: '进度的callback',
          duration: 1.5,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
