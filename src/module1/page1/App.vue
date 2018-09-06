<template>
  <div class="wrapper">
    <image :src="img" class="logo" />
    img:{{img}}
    logo:{{logo}}
    text:{{text}}
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import img from '../../../static/q.png'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      // ddd
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      img,
      text: 'fdff',
    }
  },
  created() {
    console.log('开始加载了')
    console.log(img)
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  $width: 424px;
  .logo {
    width: $width;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
