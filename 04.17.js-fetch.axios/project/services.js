import axios from "axios";
import { BASE_URL } from "./constant.js";

//delete suppplier by id

export async function deleteDataById(endpoint, id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

//post data

export async function addNewData(obj) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, obj);
    return response;
  } catch (error) {
    console.log(error);
  }
}
