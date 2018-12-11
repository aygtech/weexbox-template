<template>
  <web :style="{height: `${height}px`}"
    :src="url"></web>
</template>

<script>
import { toolbarHeight, router, weexBoxUrl } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')

export default {
  components: {
  },
  data() {
    return {
      height: toolbarHeight,
      url: ''
    }
  },
  created() {
    const params = router.getParams()
    if (params) {
      this.url = `${weexBoxUrl}#${params.url}`
      navigator.setCenterItem({
        text: params.title,
        color: '3d3d3d'
      }, () => {})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
