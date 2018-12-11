<template>
  <div class="wrap">
    <text class="title">获取经纬度</text>
    <div class="button" @click="getLocation">
      <text class="button-text">获取经纬度</text>
    </div>
    <div class="empty"></div>
    <text>{{info}}</text>
  </div>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
const location = weex.requireModule('wb-location')
// const params = router.getParams()
const params = {
  title: 'wb-location',
  url: 'wb-location'
}

export default {
  components: {
  },
  data() {
    return {
      info: null
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
  },
  methods: {
    getLocation() {
      location.getLocation((result) => {
        console.log(JSON.stringify(result))
        if (result.status === 0) {
          this.info = result.data
          modal.toast({
            message: '获取成功',
            duration: 1.5
          })
        } else {
          modal.toast({
            message: '获取失败',
            duration: 1.5
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
