<template>
  <div
    class="min-h-screen p-[10px] bg-black/80 flex items-center justify-center font-Kanit"
  >
    <div class="items-center justify-center bg-black/80 rounded-lg">
      <!-- <p>
        1. ดาวน์โหลด Beat ได้ที่นี่
        <a href="http://www.dekwen.beat.com" class="text-sky-300"
          >DEKWEN BEAT</a
        >
      </p>
      <p>2. ไม่จำกัดเนื้อหา ( ห้ามพาดพิงชาติ ศาสนา )</p>
      <p>3. อัดเสียง สามารถมิกซ์ได้</p> -->

      <!-- <h3 class="pt-[10px]">รางวัลของผู้ชนะเลิศของแต่ละอันดับคือ</h3>
      <p>- อันดับ 1 จะได้รับ 3 beat</p>
      <p>- อันดับ 2 จะได้รับ 2 beat</p>
      <p>- อันดับ 3 จะได้รับ 1 beat</p> -->
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
