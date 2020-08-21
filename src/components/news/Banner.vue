<template>
  <!-- 模版 -->
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
    <ul class="bannerImage" :style="{width: banners.length*100 + '%', marginLeft: -index*100+ '%'}">
      <li v-for="(item,i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.url" alt />
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li v-for="(item,i) in banners" :key="i" :class="{ active: index === i }" @click="index=i"></li>
    </ul>
  </div>
</template>

<script>
// 需要放到js中管理的数据
//图片信息数组[{url:"",link:""}]、当前显示第几张图片
export default {
  props: {
    banners: {
      type: Array, //传递的类型为数组
      required: true, //必须传递
    },
    duration: {
        type: Number,
        default: 2000 //设定默认值
    }
  },
  created() {
      this.autoStart()
  },
  destroyed() {
      this.autoStop();
  },
  data() {
    return {
      index: 0, //表示当前是第几张图片
      timer: null, //定时器启停标记
    };
  },
  methods: {
    //开始自动切换
    autoStart() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.banners.length;
      }, this.duration);
    },
    //停止自动切换
    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style scoped>
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.bannerImage {
  height: 100%;
  transition: 1s;
}
.banner-container img{
    width: 1080px;
    height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>