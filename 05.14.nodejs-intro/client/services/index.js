import axios from "axios";
import { BASE_URL, endpoints } from "./constant";

//get all data

const getAllData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoints}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//get data by id

const getOneDataById = async (endpoint, id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

//delete data by id

const deleteDataById = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//post new customers

const addNewData = async (endpoint, payload) => {
  try {
    const response = axios.post(`${BASE_URL}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
//update customer by id

const updateDataById = async (endpoint, id, payload) => {
  try {
    const response = axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getAllData,
  getOneDataById,
  addNewData,
  deleteDataById,
  updateDataById,
};
