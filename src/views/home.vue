<template>
  <div id="app">
    <div style="width: 1080px; margin: 0 auto">
      <Header />
      <Banner :banners="banners" :duration="3000" />
      <Channel @change="handleChange" />
      <Center>
        <Loading v-show="isLoading" />
      </Center>

      <NewsList v-show="!isLoading" :news="news" />
    </div>
  </div>
</template>

<script>
import Banner from "../components/news/Banner";
import Channel from "../components/news/Channels";
import NewsList from "../components/news/NewsList";
import { getNews } from "@/services/newsService";
import Loading from "../components/news/Loading";
import Center from "../components/news/Center";
import Header from "../components/news/Header"
export default {
  components: {
    Banner,
    Channel,
    NewsList,
    Loading,
    Center,
    Header
  },
  data() {
    return {
      banners: [
        {
          url: require("../assets/banners/banner1.jpg"),
          link: "www.baidu.com",
        },
        {
          url: require("../assets/banners/banner2.jpg"),
          link: "www.baidu.com",
        },
        {
          url: require("../assets/banners/banner3.jpg"),
          link: "www.baidu.com",
        },
      ],
      news: [],
      isLoading: true,
    };
  },
  methods: {
    handleChange(channelId) {
      this.isLoading = true;
      getNews(channelId).then(async (resp) => {
        this.news = resp.contentlist;
      });
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>
