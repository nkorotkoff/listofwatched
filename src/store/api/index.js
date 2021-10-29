import axios from "axios";

const API = axios.create({ baseURL: `http://127.0.0.1:4000` });
const config = { withCredentials: true };

export const login = (datas) => API.post("/api/auth/login", datas, config);
export const signUp = (datas) => API.post("/api/auth/register",datas);
export const loadUser = () => API.get("api/auth/me", config);
