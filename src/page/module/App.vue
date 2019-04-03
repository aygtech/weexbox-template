<template>
  <scroller class="wrapper">
    <text
      v-for="(item, index) in moduleList"
      :key="index"
      class="item"
      @click="detail(item)"
    >
      {{ item }}
    </text>
  </scroller>
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
      moduleList,
    }
  },
  created() {
    navigator.setCenterItem({
      text: 'WeexBox例子',
      color: '3d3d3d',
    }, () => {})
  },
  methods: {
    detail(item) {
      router.open({
        url: `page/${item}.js`,
        params: {
          title: item,
          url: item,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  font-size: 34px;
  padding: 30px 30px;
  border-bottom-color: #e7e5e5;
  border-bottom-width: 1px;
}
</style>
