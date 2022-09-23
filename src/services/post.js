/* eslint-disable import/prefer-default-export */
// @ts-check

import axios from "axios";
import config from "config";
// @ts-ignore
import { getAuth } from "auth/auth";

// cookies
// @ts-ignore
import { getCookie, getUserName } from "utils/auth";

/**
 * Takes a date object, sends it to the API, and returns the response
 * @param {string} backup - The date object that contains the date's information.
 * @returns The data from the response.
 */
export const executeTranslation = async (backup) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}backup/execute`,
    { backup, user: getUserName() },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
