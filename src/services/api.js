import axios from "axios";

const apiKey = "http://localhost:5000";

export const api = axios.create({
  baseURL: apiKey,
});