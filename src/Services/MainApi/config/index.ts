import axios from "axios";


const API_BASE = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        "Content-Type": "application/json"
    }
});

export default API_BASE;