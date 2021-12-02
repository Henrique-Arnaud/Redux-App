import axios from "axios";

const githubApi = axios.create({
  baseURL: 'https://api.github.com/users'
})

export default githubApi;