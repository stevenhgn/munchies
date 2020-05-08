import axios from "axios";

const instance = axios.create({
  baseURL: "https://warm-reef-84103.herokuapp.com/api",
  timeout: 1000,
});
export default instance;
