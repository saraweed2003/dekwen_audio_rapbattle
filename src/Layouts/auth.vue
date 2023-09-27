<template>
  <div class="">
    <login />
  </div>
  <router-view></router-view>
</template>

<script setup>
import Login from "../components/login/login.vue";
</script>

<style scoped>
.bg {
  background-image: url("src\assets\Background.jpg");
  position: fixed;
  /* background-image: ("src\assets\Background.jpg"); */

  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
}
</style>
