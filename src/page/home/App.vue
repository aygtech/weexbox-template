<template>
  <div>
    <scroller class="logo-panel">
      <div class="logo">
        <image src="https://aygtech.github.io/weexbox/logo.png" class="icon"></image>
        <text class="title">WeexBox</text>
      </div>
    </scroller>
    <div class="wrapper">
      <div class="item" @click="course">
        <text class="text">教程</text>
      </div>
      <div class="item" @click="modulePage">
        <text class="text">实例</text>
      </div>
      <div class="item" @click="about">
        <text class="text">关于</text>
      </div>
      <div class="item" @click="use">
        <text class="text">谁在使用WeexBox</text>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')

export default {
  components: {
  },
  data() {
    return {
    }
  },
  created() {
    navigator.setCenterItem({
      text: 'WeexBox',
      color: '3d3d3d'
    }, () => {})
    navigator.setLeftItems([{
      text: '',
      color: '3d3d3d'
    }], () => {})
  },
  methods: {
    use() {
      modal.showToast({
        text: '整理中...',
        duration: 1.5
      })
    },
    course() {
      router.open({
        name: 'web',
        title: '教程',
        url: 'https://aygtech.github.io/weexbox'
      })
    },
    about() {
      router.open({
        url: 'page/about.js',
        params: {}
      })
    },
    modulePage() {
      router.open({
        url: 'page/module.js',
        params: {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.logo-panel {
  border-bottom-width: 1px;
  border-bottom-color: #e7e5e5;
}
.logo {
  flex: 1;
  width: 750px;
  padding-top: 150px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.icon {
  width: 200px;
  height: 200px;
}
.title {
  padding-top: 50px;
  font-size: 40px;
  font-weight: bold;
}
.text {
  font-size: 34px;
}
.item {
  width: 375px;
  padding: 80px 0px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 1px;
  border-right-width: 1px;
  border-right-color: #e7e5e5;
  border-bottom-width: 1px;
  border-bottom-color: #e7e5e5;
  background-color: #f7f7f7;
}
</style>
