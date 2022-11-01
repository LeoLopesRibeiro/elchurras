import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discover.search.hereapi.com/v1/'
});

export default api