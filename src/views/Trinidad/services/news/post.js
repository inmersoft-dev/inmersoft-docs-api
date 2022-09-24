// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a news object, sends it to the API, and returns the response
 * @param {object} news - The news object that contains the news's information.
 * @returns The data from the response.
 */
export const createNews = async (news) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}news/save`,
    { ...news, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the news's ID and the ID of the news to delete
 * @param {string} news - The news id of the news you want to delete.
 * @returns The data is being returned.
 */
export const deleteNews = async (news) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}news/delete`,
    { news },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the news's ID and the ID of the news to delete
 * @param {string[]} news - The news id of the news you want to delete.
 * @returns The data is being returned.
 */
export const deleteManyNews = async (news) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}news/delete-many`,
    { news },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the news's ID and news data to modify it
 * @param {object} newsData - News data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyNews = async (newsData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}news/save`,
    { ...newsData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
