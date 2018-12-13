<template>
  <div class="wrap">
    <text class="title">globalEvent 全局事件</text>
  </div>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
const globalEvent = weex.requireModule('globalEvent')
// const params = router.getParams()
const params = {
  title: 'globalEvent',
  url: 'globalEvent'
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
    this.init()
  },
  methods: {
    init() {
      globalEvent.addEventListener('viewDidAppear', () => {
        modal.showToast({
          text: 'viewDidAppear',
          duration: 1.5
        })
      })
      globalEvent.addEventListener('viewDidDisappear', () => {
        modal.showToast({
          text: 'viewDidDisappear',
          duration: 1.5
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
