<template>
  <scroller>
    <div class="wrapper">
      <div class="item">
        <text>教程</text>
      </div>
      <div class="item">
        <text>实例</text>
      </div>
      <div class="item">
        <text>关于</text>
      </div>
    </div>
  </scroller>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')

export default {
  components: {
  },
  data() {
    return {
    }
  },
  created() {
    navigator.setCenterItem({
      text: 'WeexBox',
      color: '3d3d3d'
    }, () => {})
  },
  methods: {
    course() {
      router.open({
        name: 'web',
        url: 'https://aygtech.github.io/weexbox'
      })
    },
    module() {
      router.open({
        url: 'page/module.js',
        params: {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
