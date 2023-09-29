import axios from "axios";

const DekwenAPI = axios.create({
  baseURL: "https://dekwen-audio-battle-api.billowdev.com/api",
});
export { DekwenAPI };

