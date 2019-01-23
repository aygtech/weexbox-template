<template>
  <scroller>
    <div class="ver">
      <text class="title">Weex SDK Version</text>
      <div class="info">
        <text class="info-item info-left">appVersion</text>
        <text class="info-item info-right">{{env['appVersion']}}</text>
        <text class="info-item info-left">weexVersion</text>
        <text class="info-item info-right">{{env['weexVersion']}}</text>
        <text class="info-item info-left">platform</text>
        <text class="info-item info-right">{{env['platform']}}</text>
        <text class="info-item info-left">osVersion</text>
        <text class="info-item info-right">{{env['osVersion']}}</text>
        <text class="info-item info-left">deviceModel</text>
        <text class="info-item info-right">{{env['deviceModel']}}</text>
      </div>
      <!-- <text>{{env}}</text> -->
    </div>
    <text class="item" @click="website">WeexBox 官网</text>
    <!-- <text class="item" @click="problem">常见问题</text> -->
  </scroller>
</template>

<script>
import { router, weexBoxDomain } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
const { env } = weex.config

export default {
  components: {
  },
  data() {
    return {
      env,
    }
  },
  created() {
    navigator.setCenterItem({
      text: 'WeexBox',
      color: '3d3d3d',
    }, () => {})
  },
  methods: {
    website() {
      router.open({
        name: 'web',
        title: '官网',
        url: weexBoxDomain,
      })
    },
    problem() {
      modal.showToast({
        text: '整理中...',
        duration: 1.5,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.ver {
  margin: 30px;
  padding: 30px;
  background-color: #f7f7f7;
  border-radius: 10px;
}
.title {
  color: #999999;
  text-align: center;
  font-size: 34px;
  padding-bottom: 20px;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.info-item {
  font-size: 30px;
  width: 310px;
  border-bottom-color: #e7e5e5;
  border-bottom-width: 1px;
}
.info-left {
  padding: 20px 0px;
  text-align: right;
  color: #999999;
}
.info-right {
  padding: 20px 0px 20px 30px;
  text-align: left;
}
.item {
  font-size: 34px;
  padding: 30px 30px;
  border-bottom-color: #e7e5e5;
  border-bottom-width: 1px;
}
</style>
