<template>
  <web
    :style="{height: `${height}px`}"
    :src="url"
  />
</template>

<script>
import { screenHeight, router, weexBoxUrl } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')

export default {
  components: {
  },
  data() {
    return {
      height: screenHeight,
      url: '',
    }
  },
  created() {
    const params = router.getParams()
    if (params) {
      this.url = params.type ? params.url : `${weexBoxUrl}#${params.url}`
      navigator.setCenterItem({
        text: params.title,
        color: '3d3d3d',
      }, () => {})
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
