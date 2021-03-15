import axios from "axios";

const KEY = "AIzaSyA7qKO_2xeqm3jwPWHx9qVL0VWuijo8Gwc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
