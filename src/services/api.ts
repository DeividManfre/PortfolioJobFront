import axios from "axios"

export const api = axios.create({
    // TODO: ADD .ENV
    baseURL: 'http://127.0.0.1:8000'
  });

