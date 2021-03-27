import axios from 'axios';

export const DEV_URL = process.env.HOST_SERVER;

const instance = axios.create({
  baseURL: DEV_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
