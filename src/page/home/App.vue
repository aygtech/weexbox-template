<template>
  <div class="wrapper">
    <text @click="wbRouter">wb-router</text>
  </div>
</template>

<script>
import { router } from '../../utils/native'

export default {
  components: {
  },
  data() {
    return {
    }
  },
  created() {
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
.wrapper {
  justify-content: center;
  align-items: center;
}
</style>
