<template>
  <div class="min-h-screen flex items-center justify-center bg-black/80">
    <div class="bg-black/90 p-[30px] rounded-lg shadow-md">
      <h1 class="text-[30px] font-semibold text-white text-center mb-4">
        LOGIN
      </h1>
      <input
        v-model="username"
        placeholder="Username"
        required
        class="w-full p-2 mb-2 border rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="w-full p-2 mb-4 border rounded"
      />
      <button
        @click="login"
        class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Login
      </button>
      <p v-if="showErrorMessage" class="text-red-500 mt-2">
        Invalid username or password
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const showErrorMessage = ref(false);

const login = () => {
  if (username.value === "admin" && password.value === "1234") {
    // Successful login logic here
    console.log("Logged in successfully");
    showErrorMessage.value = false;
  } else {
    showErrorMessage.value = true;
  }
};
</script>

<style>

</style>
