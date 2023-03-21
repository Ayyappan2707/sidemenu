import axios from "axios";

export const baseURL = axios.create({
    baseURL: 'https://nifty-kare-32d12b.netlify.app/'
});