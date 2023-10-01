<template>
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-[#161616]/80"
  >
    <div class="bg-[#000000] p-[20px] font-Kanit rounded-lg">
      <div class="">
        <div
          class="grid-rows-2 text-center text-[25px] font-bold text-[#ffffff]"
        >
          ยืนยันการส่งแบบฟอร์ม
        </div>
        <span
          class="text-[16px] text-center text-gray-400 items-center justify-center flex"
          >ตรวจสอบข้อมูลให้ถูกต้อง</span
        >

        <div class="grid grid-cols-2 gap-2.5 pt-[10px]">
          <button
            @click="cancelCreate"
            class="bg-[#202020] text-[#ffffff]   rounded-[5px]"
          >
            ยกเลิก
          </button>

          <button
            @click="confirmCreate"
            class="bg-[#ffffff] text-[#000000] py-[9px] px-[45px] rounded-[5px]"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["cancel", "confirm"]);

const cancelCreate = () => {
  emit("cancel");
};

const confirmCreate = () => {
  emit("confirm");
};
</script>

<style lang="scss" scoped></style>
