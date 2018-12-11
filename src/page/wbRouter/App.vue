<template>
  <text>wb-router</text>
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
      text: 'wb-router',
      color: '3d3d3d'
    }, () => {})
  },
  methods: {
    wbRouter() {
      router.open({
        url: 'page/web.js',
        params: {
          title: 'wb-router',
          url: '#wb-router'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
