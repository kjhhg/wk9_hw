import axios from "axios";
const apiKey = "be2d03bbfffc4b71b0d166ef1babe32b";

export default axios.create({
    method:"get",
    baseURL:"https://newsapi.org/v2",
    params:{
        pageSize:6
    },
    header:{
        Authorization:apiKey
    }
});