import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c722f5288eca483ca9fdaccd1ab0be55",
  },
});
