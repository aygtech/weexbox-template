<template>
  <scroller class="wrap">
    <wb-lottie class="happyBirthday" :sourceJson='sourceJson' :loop='loop' ref="lottie"></wb-lottie>
    <text class="title">播放动画</text>
    <div class="button" @click="play">
      <text class="button-text">播放</text>
    </div>
    <div class="empty"></div>

    <text class="title">暂停动画</text>
    <div class="button" @click="pause">
      <text class="button-text">暂停</text>
    </div>
    <div class="empty"></div>

    <text class="title">停止动画</text>
    <div class="button" @click="stop">
      <text class="button-text">停止</text>
    </div>
    <div class="empty"></div>
  </scroller>
</template>

<script>
import { router, weexBoxUrl } from '../../utils/native'

const happyBirthday = require('./happyBirthday.json')

const params = {
  title: 'wb-lottie',
  url: 'wb-lottie',
}

export default {
  components: {
  },
  data() {
    return {
      sourceJson: happyBirthday,
      loop: false,
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
    })
  },
  methods: {
    play() {
      this.$refs.lottie.play((result) => {
        console.log(JSON.stringify(result))
      })
    },
    pause() {
      this.$refs.lottie.pause()
    },
    stop() {
      this.$refs.lottie.stop()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
.happyBirthday {
  width: 750px;
  height: 750px;
}
</style>
