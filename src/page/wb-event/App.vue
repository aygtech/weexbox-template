<template>
  <div class="wrap">
    <text class="title">注册事件(register)</text>
    <div class="button" @click="register">
      <text class="button-text">register</text>
    </div>
    <div class="empty"></div>

    <text class="title">发送事件(emit)</text>
    <div class="button" @click="emit">
      <text class="button-text">emit</text>
    </div>
    <div class="empty"></div>

    <text class="title">注销事件(unregister)</text>
    <div class="button" @click="unregister">
      <text class="button-text">unregister</text>
    </div>
    <div class="empty"></div>

    <text class="title">注销所有事件(unregisterAll)</text>
    <div class="button" @click="unregisterAll">
      <text class="button-text">unregisterAll</text>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
const event = weex.requireModule('wb-event')
// const params = router.getParams()
const params = {
  title: 'wb-event',
  url: 'wb-event'
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
    unregisterAll() {
      event.unregisterAll()
      modal.showToast({
        text: '注销所有事件成功',
        duration: 1.5
      })
    },
    unregister() {
      event.unregister('eventName')
      modal.showToast({
        text: '注销成功',
        duration: 1.5
      })
    },
    emit() {
      event.emit({
        // 事件名称
        name: 'eventName',
        // 事件参数，默认为空
        params: {
          desc: 'test'
        }
      })
    },
    register() {
      event.register('eventName', (result) => {
        // result为传过来的参数
        modal.showToast({
          text: `接收内容：${result.desc}`,
          duration: 1.5
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
