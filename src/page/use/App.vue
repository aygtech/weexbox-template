<template>
  <scroller>
    <text>sdfsdf</text>
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
      text: '谁在使用WeexBox',
      color: '3d3d3d'
    }, () => {})
  },
  methods: {
    course() {
      router.open({
        name: 'web',
        title: '教程',
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
