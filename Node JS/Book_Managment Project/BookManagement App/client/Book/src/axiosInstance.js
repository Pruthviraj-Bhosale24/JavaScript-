import axios from "axios";

export const baseBookURL = axios.create({
  baseURL: "http://localhost:3000/book/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseBookURL;
