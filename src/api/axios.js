import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2945af762b9fefcd4bb6a46b7fe617fc",
    language: "ko-KR"
  }
})

export default instance;