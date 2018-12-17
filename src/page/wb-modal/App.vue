<template>
  <scroller class="wrap">
    <text class="title">警告弹窗(alert)</text>
    <div class="button" @click="alert">
      <text class="button-text">警告弹窗</text>
    </div>
    <div class="empty"></div>

    <text class="title">确定弹窗(confirm)</text>
    <div class="button" @click="confirm">
      <text class="button-text">确定弹窗</text>
    </div>
    <div class="empty"></div>

    <text class="title">输入弹窗(prompt)</text>
    <div class="button" @click="prompt">
      <text class="button-text">输入弹窗</text>
    </div>
    <div class="empty"></div>

    <text class="title">操作表弹窗(actionSheet)</text>
    <div class="button" @click="actionSheet">
      <text class="button-text">操作表弹窗</text>
    </div>
    <div class="empty"></div>

    <text class="title">吐司(showToast)</text>
    <div class="button" @click="showToast">
      <text class="button-text">吐司</text>
    </div>
    <div class="empty"></div>

    <text class="title">菊花圈(showLoading)</text>
    <div class="button" @click="showLoading">
      <text class="button-text">菊花圈</text>
    </div>
    <div class="empty"></div>

    <!-- <text class="title">进度</text>
    <div class="button" @click="showProgress">
      <text class="button-text">显示进度</text>
    </div>
    <div class="empty"></div> -->
  </scroller>
</template>

<script>
import { router } from '../../utils/native'

const navigator = weex.requireModule('wb-navigator')
const modal = weex.requireModule('wb-modal')
// const params = router.getParams()
const params = {
  title: 'wb-modal',
  url: 'wb-modal'
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
    alert() {
      modal.alert({
        title: '标题',
        message: '弹窗内容',
        okTitle: '确定'
      }, () => {
        modal.showToast({
          text: '确定回调',
          duration: 1.5
        })
      })
    },
    confirm() {
      modal.confirm({
        title: '标题',
        message: '弹窗内容',
        cancelTitle: '取消',
        okTitle: '确定'
      }, (result) => {
        modal.showToast({
          text: result.status === -1 ? '取消回调' : '确定回调',
          duration: 1.5
        })
      })
    },
    prompt() {
      modal.prompt({
        title: '标题',
        placeholder: '请输入密码',
        cancelTitle: '取消',
        okTitle: '确定'
      }, (result) => {
        modal.showToast({
          text: result.data.text,
          duration: 1.5
        })
      })
    },
    actionSheet() {
      modal.actionSheet({
        actions: [
          { type: 'normal', title: '拍照' },
          { type: 'normal', title: '相册' },
          { type: 'cancel', title: '取消' }
        ]
      }, (result) => {
        const { index } = result.data
        modal.showToast({
          text: index,
          duration: 1.5
        })
      })
    },
    showToast() {
      modal.showToast({
        text: '提示信息',
        duration: 1.5
      })
    },
    showLoading() {
      modal.showLoading('加载中...')
      setTimeout(() => {
        this.dismiss()
      }, 1500)
    },
    showProgress() {
      modal.showProgress({
        progress: 50,
        text: '加载中...'
      })
    },
    dismiss() {
      modal.dismiss()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/global';
</style>
