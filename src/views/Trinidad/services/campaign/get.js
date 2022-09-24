/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { getAuth } from "../../../../auth/auth";
import config from "../../../../config";

// cookies
import { getCookie } from "../../../../utils/auth";

/**
 *
 * @param {number} id
 * @returns
 */
export const campaignList = async (id = undefined) => {
  let response;
  try {
    response = await axios.get(
      `${config.apiUrl}campaign/list${id || id === 0 ? `?id=${id}` : ""}`,
      {
        headers: {
          ...getAuth,
          Authorization: `Bearer ${getCookie(config.basicKey)}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    return { error: String(err) };
  }
};
