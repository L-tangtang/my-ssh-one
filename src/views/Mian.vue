<template>
  <div class="img-box">
    <li v-for="(item,index) in getImg" :key="index">
      <img v-lazy="item.img" alt />
      <p>
        <span>{{item.title}}</span>
        <span>
          <button>详情</button>
          <button v-if="item.flag">已收藏</button>
          <button v-else @click="headleFlag">收藏</button>
        </span>
      </p>
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    getImg() {
      return this.$store.state.imgdata;
    }
  },
  methods: {
    headleFlag() {
      
    }
  },
  mounted() {
    axios({
      url: "/getImg"
    }).then(res => {
      this.$store.dispatch({ type: "getImg" });
    });
  }
};
</script>

<style lang='scss' scoped>
.img-box {
  width: 100%;
  li {
    width: 100%;
    height: 210px;
    display: flex;
    img {
      width: 50%;
      height: 200px;
    }
    p {
      padding: 25px 40px;
      flex: 1;
    }
  }
}
</style>