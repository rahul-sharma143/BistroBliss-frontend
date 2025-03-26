import { data } from "react-router-dom";
import { BASE_URL } from "./util";
import axios from "axios";

export const bookingUser = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/booking`, data);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("There was an error!");
    }
  } catch (error) {
    return {
        success: false,
        error: error.response?.data?.message || error?.message,
    }
  }
};

export const contactUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/booking`, data);
        if (response.data) {
          return response.data;
        } else {
          throw new Error("There was an error!");
        }
      } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || error?.message,
        }
      }
};
