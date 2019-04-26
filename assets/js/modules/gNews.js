import axios from 'axios';
const apiKey = "d925e00ea57d453a981ecff126d80124";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});