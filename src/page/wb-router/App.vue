<template>
  <div class="wrap">
    <text class="title">打开新页面(open)</text>
    <div class="button" @click="open">
      <text class="button-text">打开新页面</text>
    </div>
    <div class="empty"></div>

    <text class="title">获取router的params参数(getParams)</text>
    <div class="button" @click="getParams">
      <text class="button-text">获取参数</text>
    </div>
    <div class="empty"></div>

    <text class="title">关闭页面(close)</text>
    <div class="button" @click="close">
      <text class="button-text">关闭本页</text>
    </div>
    <div class="empty"></div>

    <text class="title">刷新weex页面(refresh)</text>
    <div class="button" @click="refresh">
      <text class="button-text">刷新本页</text>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
// const params = router.getParams()
const params = {
  title: 'wb-router',
  url: 'wb-router'
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
        color: '3d3d3d'
      }, () => {})
    }
    navigator.setRightItems([{
      text: '查看文档',
      color: '3d3d3d'
    }], () => {
      router.open({
        url: 'page/web.js',
        params: {
          title: params.title,
          url: params.url
        }
      })
    })
  },
  methods: {
    close() {
      router.close()
    },
    refresh() {
      router.refresh()
    },
    getParams() {
      modal.showToast({
        text: `${JSON.stringify(params)}`,
        duration: 1.5
      })
    },
    open() {
      router.open({
        url: 'page/web.js',
        params: {
          title: params.title,
          url: params.url
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
