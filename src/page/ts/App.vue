<template>
  <div>
    <scroller class="logo-panel">
      <div class="logo">
        <image src="https://aygtech.github.io/weexbox/logo.png" class="icon" />
        <text class="title">WeexBox + TypeScript</text>
      </div>
    </scroller>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue { }
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
