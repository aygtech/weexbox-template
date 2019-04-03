<template>
  <scroller class="wrap">
    <text class="title">
      设置导航栏左边按钮(setLeftItems)
    </text>
    <div
      class="button"
      @click="setLeftItems"
    >
      <text class="button-text">
        设置导航栏左边按钮
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      设置导航栏右边按钮(setRightItems)
    </text>
    <div
      class="button"
      @click="setRightItems"
    >
      <text class="button-text">
        设置导航栏右边按钮
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      设置导航栏中间的按钮(setCenterItem)
    </text>
    <div
      class="button"
      @click="setCenterItem"
    >
      <text class="button-text">
        设置导航栏中间的按钮
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      设置导航栏颜色(setNavColor)
    </text>
    <div
      class="button"
      @click="setNavColor"
    >
      <text class="button-text">
        设置导航栏颜色
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      获取状态栏高度(getHeight)
    </text>
    <div
      class="button"
      @click="getHeight"
    >
      <text class="button-text">
        获取状态栏高度
      </text>
    </div>
    <div class="empty" />
  </scroller>
</template>

<script>
import { router, weexBoxUrl } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
// const params = router.getParams()
const params = {
  title: 'wb-navigator',
  url: 'wb-navigator',
}

export default {
  components: {
  },
  data() {
    return {
      disabledBack: false,
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
    getHeight() {
      const navHeight = navigator.getHeight()
      modal.showToast({
        text: `状态栏高度：${navHeight}`,
        duration: 1.5,
      })
    },
    setLeftItems() {
      navigator.setLeftItems([
        {
          text: '返回',
          color: '000000',
        },
      ], () => {
        router.close()
      })
    },
    setRightItems() {
      navigator.setRightItems([
        {
          text: '确定',
          color: '000000',
        },
      ], () => {
        modal.showToast({
          text: '确定回调',
          duration: 1.5,
        })
      })
    },
    setCenterItem() {
      navigator.setCenterItem({
        text: 'weex-box',
        color: '000000',
      }, () => {
        modal.showToast({
          text: '设置标题：weex-box',
          duration: 1.5,
        })
      })
    },
    setNavColor() {
      navigator.setNavColor('00ff00')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
