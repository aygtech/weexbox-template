<template>
  <div class="wrapper">
    <image
      :src="logo"
      class="logo"
    />
    <text class="greeting">
      WeexBox is ready!
    </text>
    <HelloWorld />
  </div>
</template>

<script>
import logo from '../../../static/logo.png'

export default {
  data() {
    return {
      logo,
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}

.logo {
  width: 200px;
  height: 200px;
}

.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
</style>
