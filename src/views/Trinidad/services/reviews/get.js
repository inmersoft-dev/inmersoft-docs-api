/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { getAuth } from "../../../../auth/auth";
import config from "../../../../config";

// cookies
import { getCookie } from "../../../../utils/auth";

export const reviewList = async () => {
  let response;
  try {
    response = await axios.get(`${config.apiUrl}review/list`, {
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    return { error: String(err) };
  }
};
