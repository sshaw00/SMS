import axios from "axios";
// const { SERVER_URL } = require("../constants/index");
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    "http://localhost:8000/api/register",
    registrationData
  );
}
export async function onForgotPassword(registrationData) {
  return await axios.post(
    "http://localhost:8000/api/forgotpassword",
    registrationData
  );
}

export async function onLogin(loginData) {
  return await axios.post("http://localhost:8000/api/login", loginData);
}

export async function onLogout() {
  return await axios.get("http://localhost:8000/api/logout");
}

export async function fetchProtectedInfo() {
  return await axios.get("http://localhost:8000/api/protected");
}
