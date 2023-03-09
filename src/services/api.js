import axios from "axios";

const apiKey = "http://localhost:5001";

export const api = axios.create({
  baseURL: apiKey,
});