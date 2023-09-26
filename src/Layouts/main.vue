<script setup></script>
<template>
  <div class="bg font-Kanit">
    <RouterView />
  </div>
</template>

<style>
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
