<template>
  <div class="wrap">
    <text class="title">
      {{ text }}
    </text>
  </div>
</template>

<script>
import { router, weexBoxUrl } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const globalEvent = weex.requireModule('globalEvent')
// const params = router.getParams()
const params = {
  title: 'globalEvent',
  url: 'globalEvent',
}

export default {
  components: {
  },
  data() {
    return {
      text: 'globalEvent 全局事件',
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
    this.init()
  },
  methods: {
    init() {
      globalEvent.addEventListener('viewDidAppear', () => {
        this.text += '\n'
        this.text += 'viewDidAppear'
      })
      globalEvent.addEventListener('viewDidDisappear', () => {
        this.text += '\n'
        this.text += 'viewDidDisappear'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
