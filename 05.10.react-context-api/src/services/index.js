import axios from "axios";
import { BASE_URL } from "./constant";

//get all data

async function getAllData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

// get data by id

async function getDataById(endpoint, id) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

//delete data by id

async function deleteDataById(endpoint, id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

//add new data
async function addNewData(endpoint, payload) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
//update data by id
async function updateDataById(endpoint, id, payload) {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

const controller = {
  getAllData,
  getDataById,
  deleteDataById,
  addNewData,
  updateDataById,
};

export default controller;
