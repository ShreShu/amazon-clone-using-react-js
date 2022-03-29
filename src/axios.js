import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/amzn-clone-4217c/us-central1/api",
});

export default instance;
