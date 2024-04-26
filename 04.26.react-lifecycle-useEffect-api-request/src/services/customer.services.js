import axios from "axios";
import { BASE_URL } from "./constant";

//get all data

const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customers`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

//get data by id

const getOneCustomersById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/customers/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

//delete data by id

const deleteDataById = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/customers/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//post new customers

const addNewCustomer = async (payload) => {
  try {
    const response = axios.post(`${BASE_URL}/customers`, payload);
    return (await response).data;
  } catch (error) {
    console.log(error.message);
  }
};
//update customer by id

const updateCustomerById = async (id, payload) => {
  try {
    const response = axios.put(`${BASE_URL}/customers/${id}`, payload);
    return (await response).data;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getAllCustomers,
  getOneCustomersById,
  addNewCustomer,
  deleteDataById,
  updateCustomerById,
};
