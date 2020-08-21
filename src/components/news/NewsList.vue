<template>
  <div>
    <div class="news-item-normal" v-for="item in news" :key="item.id">
      <div class="image" v-if="item.havePic">
        <a :href="item.link">
          <img :src="item.imageurls[0].url" alt />
        </a>
      </div>
      <div class="words">
          <h2 class="title">
              <a :href="item.link">
                  {{ item.title }}
              </a>
          </h2>
          <div class="aside">
            <span>{{ item.channerName }}</span>
            <span>来源：{{ item.source }}</span>
            <span>发布日期：{{ item.pubDate }}</span>
          </div>
          <div class="content">
              <span>{{ item.content }}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style>
.news-item-normal {
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 20px 0;
}
.image {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  float: left;
  margin-right: 20px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  font-size: 1.5em;
}
.aside {
  font-size: 14px;
  margin: 10px;
  color: #888;
}
.aside span {
  margin-right: 15px;
}

.content {
  max-height: 110px;
  overflow: hidden;
  line-height: 2;
}
</style>