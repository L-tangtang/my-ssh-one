<template>
  <div class="home">
    <div class="header">
      <router-link tag="span" id="0" active-class="active" to="/home/main">首页</router-link>
      <router-link tag="span" id="1" active-class="active" to="/home/shop">商品</router-link>
      <router-link tag="span" id="2" active-class="active" to="/home/my">我的</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 45px;
  display: flex;
  span {
    flex: 1;
    line-height: 45px;
    text-align: center;
  }
}
.active {
  color: red;
}
</style>
