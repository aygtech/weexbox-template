<template>
  <scroller class="wrap">
    <text class="title">打开新页面(open)</text>
    <div class="button" @click="open">
      <text class="button-text">打开新页面</text>
    </div>
    <div class="empty" />

    <text class="title">打开页面与关闭页面(closeFromBottomToTop)</text>
    <div class="button" @click="closeFromBottomToTop">
      <text class="button-text">打开页面与关闭页面</text>
    </div>
    <div class="empty" />

    <text class="title">获取router的params参数(getParams)</text>
    <div class="button" @click="getParams">
      <text class="button-text">获取参数</text>
    </div>
    <div class="empty" />

    <text class="title">刷新weex页面(refresh)</text>
    <div class="button" @click="refresh">
      <text class="button-text">刷新本页</text>
    </div>
    <div class="empty" />

    <template v-if="isIos">
      <text class="title">打开新页面并禁用返回手势(disableGestureBack)</text>
      <div class="button" @click="disableGestureBack">
        <text class="button-text">打开新页面并禁用返回手势</text>
      </div>
      <div class="empty" />
    </template>
  </scroller>
</template>

<script>
import { router, weexBoxUrl } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
const { env } = weex.config

const params = {
  title: 'wb-router',
  url: 'wb-router',
}

export default {
  components: {},
  data() {
    return {
      isIos: env.platform.toLowerCase() === 'ios',
    }
  },
  created() {
    if (params) {
      navigator.setCenterItem(
        {
          text: params.title,
          color: '3d3d3d',
        },
        () => {},
      )
    }
    navigator.setRightItems(
      [
        {
          text: '查看文档',
          color: '3d3d3d',
        },
      ],
      () => {
        router.open({
          name: 'web',
          title: params.title,
          url: `${weexBoxUrl}#${params.url}`,
        })
      },
    )
  },
  methods: {
    disableGestureBack() {
      router.open({
        url: 'page/web.js',
        disableGestureBack: true,
        params: {
          title: params.title,
          url: params.url,
        },
      })
    },
    // 打开新页面并关闭本页
    closeFromBottomToTop() {
      router.open({
        url: 'page/wb-router-close.js',
        params: {},
      })
    },
    refresh() {
      router.refresh()
    },
    getParams() {
      modal.showToast({
        text: `${JSON.stringify(params)}`,
        duration: 1.5,
      })
    },
    open() {
      router.open({
        name: 'web',
        url: `${weexBoxUrl}#${params.url}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/global";
</style>
