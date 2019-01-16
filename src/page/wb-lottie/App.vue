<template>
  <div class="wrap">
    <wb-lottie class="happyBirthday" :sourceJson=sourceJson :loop=loop ref="lottie"></wb-lottie>
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
  </div>
</template>

<script>
const happyBirthday = require('./happyBirthday.json')

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

  },
  methods: {
    play() {
      this.$refs.lottie.play((complete) => {
        console.log(complete)
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
