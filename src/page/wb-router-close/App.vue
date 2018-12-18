<template>
  <scroller class="wrap">
    <text class="title">打开新页面并关闭栈中第一个页面(open)</text>
    <div class="button" @click="closeFirst">
      <text class="button-text">打开新页面并关闭栈中第一个页面</text>
    </div>
    <div class="empty"></div>

    <text class="title">打开新页面并关闭前一个页面(open)</text>
    <div class="button" @click="closePre">
      <text class="button-text">打开新页面并关闭前一个页面</text>
    </div>
    <div class="empty"></div>

    <text class="title">打开新页面并关闭其他页面(不包括首页)(open)</text>
    <div class="button" @click="closeRoot">
      <text class="button-text">打开新页面并关闭其他页面</text>
    </div>
    <div class="empty"></div>
  </scroller>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
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
    closeFirst() {
      router.open({
        url: 'page/web.js',
        // 指定从堆栈的哪个页面开始关闭
        closeFrom: 1,
        // 关闭的页面个数
        closeCount: 1,
        // 关闭页面的方向，默认(true)和堆栈方向一致
        closeFromBottomToTop: true,
        params: {
          title: params.title,
          url: params.url
        }
      })
    },
    closeRoot() {
      router.open({
        url: 'page/web.js',
        // 指定从堆栈的哪个页面开始关闭
        closeFrom: 1,
        // 关闭的页面个数
        closeCount: 3,
        // 关闭页面的方向，默认(true)和堆栈方向一致
        closeFromBottomToTop: true,
        params: {
          title: params.title,
          url: params.url
        }
      })
    },
    closePre() {
      router.open({
        url: 'page/web.js',
        // 指定从堆栈的哪个页面开始关闭
        closeFrom: 1,
        // 关闭的页面个数
        closeCount: 1,
        // 关闭页面的方向，默认(true)和堆栈方向一致
        closeFromBottomToTop: false,
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
