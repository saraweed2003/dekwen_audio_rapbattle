<template>
  <div
    class="min-h-screen p-[10px] flex items-center justify-center font-Kanit bg-black/80"
  >
    <div class="container max-w-screen-lg mx-auto">
      <div
        class="bg-black/80 rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6 overflow-y-auto h-auto max-h-[660px]"
      >
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-white">
            <h2 class="font-semibold text-xl text-white">
              Dekwen Audio Rap Battle
            </h2>
            <p class="text-gray-200 mb-6">แบบฟอร์มกรอกข้อมูล</p>
            <!-- <p class="font-bold text-sm">Personal Details</p> -->

            <div class="flex items-center justify-center">
              <img src="src\assets\DEKWEN.png" class="image" />
            </div>

            <!-- <h1>กติกา</h1> -->
            <div>
              <h2 class="pb-[10px]">ข้อมูลที่ต้องกรอก</h2>
              <p>1. ชื่อ-นามสกุล</p>
              <p>2. AKA</p>
              <p>3. วันเกิด (วัน/เดือน/ปี)</p>
              <p>4. อีเมลล์</p>
              <p>5. เบอร์โทรศัพท์ (สามารถติดต่อได้)</p>
              <p>6. อัปโหลดรูปภาพ (ให้เห็นใบหน้าชัดเจน)</p>
              <p>7. อัปโหลดไฟล์เสียง (รับไฟล์ .wav และ .mp3)</p>
              <p>8. ลิงค์ช่องทางติดต่อ (www.facebook.com)</p>

              <!-- <h3 class="pt-[10px]">รางวัลของผู้ชนะเลิศของแต่ละอันดับคือ</h3>
              <p>- อันดับ 1 จะได้รับ 3 beat</p>
              <p>- อันดับ 2 จะได้รับ 2 beat</p>
              <p>- อันดับ 3 จะได้รับ 1 beat</p> -->
            </div>

            <p class="pt-[20px] pb-[5px]">ติดต่อสอบถามเพิ่มเติม</p>
            <a
              href="https://www.facebook.com/profile.php?id=100095485360887"
              class="text-blue-600 text-[19px] hover:text-blue-400"
              target="_blank"
              >Dekwen Audio Battle</a
            >
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="first_name" class="text-white">First Name</label>
                <input
                  type="text"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder="ชื่อ"
                  required
                />
              </div>

              <div class="md:col-span-5">
                <label for="last_name" class="text-white">Last Name</label>
                <input
                  type="text"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder="นามสกุล"
                  required
                />
              </div>

              <div class="md:col-span-3">
                <label for="aka" class="text-white">AKA</label>
                <input
                  type="text"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder="AKA"
                  required
                />
              </div>

              <div class="md:col-span-2">
                <label for="birthday" class="text-white">Birthday</label>
                <input
                  type="date"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder=""
                  required
                />
              </div>

              <div class="md:col-span-3">
                <label for="email" class="text-white">Email</label>
                <input
                  type="text"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder="email@domain.com"
                  required
                />
              </div>

              <div class="md:col-span-2">
                <label for="phone" class="text-white">Phone</label>
                <input
                  type="number"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder="เบอร์โทรศัพท์"
                  required
                />
              </div>

              <div class="md:col-span-5">
                <label for="image" class="text-white">Image</label>
                <div class="max-w-2xl rounded shadow-xl bg-gray-50 mt-1">
                  <div class="p-[10px]">
                    <div class="flex w-full">
                      <input
                        type="file"
                        ref="fileInput"
                        @change="handleFileUpload"
                        required
                      />

                      <button
                        @click="openModal"
                        v-if="selectedImage"
                        class="text-green-700 pl-[10px]"
                      >
                        View
                      </button>

                      <div v-if="modalOpen" class="modal">
                        <div class="modal-content rounded-lg">
                          <img
                            :src="selectedImage"
                            alt="Uploaded Image"
                            class="rounded-lg"
                          />
                          <button @click="closeModal" class="text-red-500">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:col-span-5">
                <label for="image" class="text-white">Audio</label>
                <div class="max-w-2xl rounded shadow-xl bg-gray-50 mt-1">
                  <div class="p-[10px]">
                    <div class="flex w-full">
                      <div>
                        <input
                          type="file"
                          ref="audioInput"
                          @change="handleAudioUpload"
                          accept="audio/*"
                          required
                        />

                        <button
                          @click="openAudioModal"
                          v-if="selectedAudio"
                          class="text-green-700 pl-[10px]"
                        >
                          Play
                        </button>

                        <div v-if="audioModalOpen" class="audio-modal">
                          <div class="audio-modal-content w-[500px] rounded-lg">
                            <audio controls :src="selectedAudio"></audio>
                            <button
                              @click="closeAudioModal"
                              class="text-red-500"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:col-span-5">
                <label for="link_social" class="text-white">Link social</label>
                <input
                  type="text"
                  class="h-10 border mt-1 rounded px-[10px] w-full bg-gray-50"
                  value=""
                  placeholder="www.facebook.com"
                  required
                />
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    class="bg-black border border-white text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fileInput = ref(null);
const selectedImage = ref("");
const modalOpen = ref(false);

const handleFileUpload = () => {
  const file = fileInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      selectedImage.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

const audioInput = ref(null);
const selectedAudio = ref("");
const audioModalOpen = ref(false);

const handleAudioUpload = () => {
  const file = audioInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      selectedAudio.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const openAudioModal = () => {
  audioModalOpen.value = true;
};

const closeAudioModal = () => {
  audioModalOpen.value = false;
};
</script>

<style scoped>
.bg {
  /* background-image: url("src\assets\Background.jpg"); */
  position: fixed;
  background-image: ("src\assets\Background.jpg");

  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
}
.image {
  width: 200px; /* กำหนดความกว้างของรูป */
  height: auto; /* ให้ความสูงปรับตามสัดส่วนของรูป */
}

.image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

img {
  max-width: 500px;
  max-height: 500px;
}

.audio-modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.audio-modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

audio {
  width: 100%;
  margin-bottom: 10px;
}
</style>
