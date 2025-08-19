
import axios from "axios";

const API_BASE = "https://apicars.prisms.in";


export const createUser = (data) => axios.post(`${API_BASE}/user/create`, data);
export const getAllUsers = () => axios.get(`${API_BASE}/user/getall`);
export const getUserById = (id) => axios.get(`${API_BASE}/user/get/${id}`); 


export const createCar = (data) => axios.post(`${API_BASE}/car/create`, data);
export const getAllCars = (userid) =>
  axios.get(`${API_BASE}/car/getall`, { params: { userid } });
export const getCarById = (id) => axios.get(`${API_BASE}/car/get/${id}`); 


export const createServicing = (data) =>
  axios.post(`${API_BASE}/servicing/create`, data);
export const getAllServicings = (carid) =>
  axios.get(`${API_BASE}/servicing/getall`, { params: { carid } });
