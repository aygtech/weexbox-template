<template>
  <scroller class="wrap">
    <text class="title">
      打开浏览器(openBrowser)
    </text>
    <div
      class="button"
      @click="openBrowser"
    >
      <text class="button-text">
        打开浏览器
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      打电话(callPhone)
    </text>
    <div
      class="button"
      @click="callPhone"
    >
      <text class="button-text">
        打电话
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      拍照(openCamera)
    </text>
    <div
      class="button"
      @click="openCamera"
    >
      <text class="button-text">
        拍照
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      打开相册(openPhoto)
    </text>
    <div
      class="button"
      @click="openPhoto"
    >
      <text class="button-text">
        打开相册
      </text>
    </div>
    <div class="empty" />
  </scroller>
</template>

<script>
import { router, weexBoxUrl, weexBoxDomain } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const external = weex.requireModule('wb-external')
const modal = weex.requireModule('wb-modal')
// const params = router.getParams()
const params = {
  title: 'wb-external',
  url: 'wb-external',
}

export default {
  components: {
  },
  data() {
    return {
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
  },
  methods: {
    openBrowser() {
      external.openBrowser(weexBoxDomain)
    },
    callPhone() {
      external.callPhone('114')
    },
    openCamera() {
      external.openCamera({
        enableCrop: true,
        isCircle: true,
        width: 500,
        height: 500,
      }, (result) => {
        modal.showToast({
          text: JSON.stringify(result),
          duration: 1.5,
        })
      })
    },
    openPhoto() {
      external.openPhoto({
        count: 9,
        enableCrop: true,
        isCircle: true,
        width: 500,
        height: 500,
      }, (result) => {
        modal.showToast({
          text: JSON.stringify(result),
          duration: 1.5,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
