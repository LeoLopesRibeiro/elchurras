import axios from "axios";

const api = axios.create({
  baseURL: "https://geocode.search.hereapi.com/v1/"
})

export default api;