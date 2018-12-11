<template>
  <div class="wrapper">
    <text
      class="item"
      v-for="(item, index) in moduleList"
      :key="index"
      @click="detail(item)">{{item}}</text>
  </div>
</template>

<script>
import { router } from '../../utils/native'
import { moduleList } from '../../utils/moduleList'

const navigator = weex.requireModule('wb-navigator')

export default {
  components: {
  },
  data() {
    return {
      moduleList
    }
  },
  created() {
    navigator.setCenterItem({
      text: 'weexbox',
      color: '3d3d3d'
    }, () => {})
  },
  methods: {
    detail(item) {
      router.open({
        url: `page/${item}.js`,
        params: {
          title: item,
          url: item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  padding: 30px 30px;
  border-bottom-color: #e7e5e5;
  border-bottom-width: 1px;
}
</style>
