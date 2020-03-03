import axios from "axios";

// 取得資料
export const getApiRepo = param => {
    return axios.get(`/users/${param.userId}/repos`)
};