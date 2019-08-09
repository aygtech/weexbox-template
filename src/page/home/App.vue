<template>
  <div>
    <scroller class="logo-panel">
      <div class="logo">
        <image src="https://aygtech.github.io/weexbox/logo.png" class="icon"/>
        <text class="title">WeexBox</text>
      </div>
    </scroller>
    <div class="wrapper">
      <div class="item" @click="weexboxPage">
        <text class="text">Weex 实例</text>
      </div>
      <div class="item" @click="flutterPage">
        <text class="text">Flutter 实例</text>
        <text class="text">需要flutter混合工程</text>
      </div>
      <div class="item" @click="ui">
        <text class="text">Weex UI</text>
      </div>
      <div class="item" @click="about">
        <text class="text">关于</text>
      </div>
    </div>
  </div>
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
    console.log('created!!!')
    console.log('hehe')
    navigator.setCenterItem({
      text: 'WeexBox',
      color: '3d3d3d',
    }, () => {})
    navigator.setLeftItems([{
      text: '',
      color: '3d3d3d',
    }], () => {})
  },
  methods: {
    ui() {
      router.open({
        name: 'weex',
        title: 'Weex UI',
        url: 'https://h5.m.taobao.com/trip/weex-ui/demo/index.native-min.js',
      })
    },
    about() {
      router.open({
        url: 'page/about.js',
        params: {},
      })
    },
    weexboxPage() {
      router.open({
        url: 'page/module.js',
        params: {},
      })
    },
    flutterPage() {
      router.open({
        name: 'flutter',
        url: 'hello',
        params: {
          k: 'v',
        },
        navBarHidden: true,
      })
    },
  },
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
