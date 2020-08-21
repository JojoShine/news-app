<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./views/home";
export default {
  components: {
    Home
  }
};
</script>

<style scoped>
</style>
