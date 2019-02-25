<template>
  <scroller class="wrap">
    <text class="title">onopeninfo：{{onopeninfo}}</text>
    <text class="title">onmessage：{{onmessage}}</text>
    <text class="title">onerrorinfo：{{onerrorinfo}}</text>
    <text class="title">oncloseinfo：{{oncloseinfo}}</text>
    <text class="title">sendinfo：{{sendinfo}}</text>
    <div class="empty"></div>
    <div class="button" @click="connect">
      <text class="button-text">连接</text>
    </div>
    <div class="empty"></div>
    <div class="button" @click="send">
      <text class="button-text">send消息</text>
    </div>
    <div class="empty"></div>
    <div class="button" @click="cose">
      <text class="button-text">cose</text>
    </div>
  </scroller>
</template>

<script>
/* eslint-disable */
// import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const websocket = weex.requireModule('webSocket')
// const params = router.getParams()
const params = {
  title: 'wb-websocket',
  url: 'wb-websocket',
}

export default {
  components: {
  },
  data() {
    return {
      onopeninfo: '未连接',
      connectinfo: '',
      sendinfo: '',
      onmessage: '',
      oncloseinfo: '',
      onerrorinfo: '',
      closeinfo: '',
      message: 0
    }
  },
  created() {
    if (params) {
      navigator.setCenterItem({
        text: params.title,
        color: '3d3d3d',
      }, () => {})
    }
  },
  methods: {
    connect() {
      websocket.WebSocket('ws://echo.websocket.org', '')
      const self = this
      self.onopeninfo = '连接中...'
      websocket.onopen(() => {
        self.onopeninfo = 'websocket连接成功'
      })
      websocket.onmessage((e) => {
        self.onmessage = e.data
      })
      websocket.onerror((e) => {
        self.onerrorinfo = e.data
      })
      websocket.onclose((e) => {
        self.onopeninfo = 'onclose'
        self.oncloseinfo = 'closed'
        self.onerrorinfo = e.code
      })
    },
    send() {
      const self = this
      this.message += 1
      websocket.send(`发送一个消息${self.message}`)
      this.sendinfo = `发送一个消息${self.message}`
    },
    close() {
      websocket.close(() => {
        this.message = 0
        this.sendinfo = 'close'
      })
      this.message = 0
      this.sendinfo = 'close'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
