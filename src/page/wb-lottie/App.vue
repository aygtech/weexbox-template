<template>
  <scroller class="wrap">
    <wb-lottie
      ref="lottie"
      class="lottie"
      :source-json="sourceJson"
      :loop="loop"
    />
    <text class="title">
      播放动画
    </text>
    <div
      class="button"
      @click="play"
    >
      <text class="button-text">
        播放
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      暂停动画
    </text>
    <div
      class="button"
      @click="pause"
    >
      <text class="button-text">
        暂停
      </text>
    </div>
    <div class="empty" />

    <text class="title">
      停止动画
    </text>
    <div
      class="button"
      @click="stop"
    >
      <text class="button-text">
        停止
      </text>
    </div>
    <div class="empty" />
  </scroller>
</template>

<script>
import { router, weexBoxDomain } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const checkedDone = require('./checked_done.json')

const params = {
  title: 'wb-lottie',
  url: 'wb-lottie',
}

export default {
  components: {
  },
  data() {
    return {
      sourceJson: checkedDone,
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
        url: `${weexBoxDomain}/guide/component.html#${params.url}`,
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
.lottie {
  width: 690px;
  height: 690px;
}
</style>
