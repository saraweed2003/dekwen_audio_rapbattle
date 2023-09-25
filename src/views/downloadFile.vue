<template>
  <div
    class="min-h-screen p-[10px] bg-black flex items-center justify-center font-Kanit"
  >
    <div class="items-center justify-center bg-gray-900 rounded">
      <div class="py-[20px]">
        <div class="flex items-center justify-center">
          <img src="src\assets\DEKWEN.png" class="w-[150px] h-[150px]" />
        </div>
        <div class="grid grid-cols-12">
          <h1 class="text-white col-start-4 col-span-10">Download beat here</h1>
          <button
            @click="downloadAudio"
            class="bg-white border rounded px-[16px] py-[5px] col-start-4 col-span-6 hover:bg-black hover:text-white"
          >
            Download Beat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const downloadAudio = () => {
  const audioFilePath = "src\beat\beat%20dekwen%20rap%20audio%20battle.mp3";
  const link = document.createElement("a");
  link.href = audioFilePath;
  link.download = "beat_dekwen_rap_audio_battle.mp3";
  link.click();
};
</script>
