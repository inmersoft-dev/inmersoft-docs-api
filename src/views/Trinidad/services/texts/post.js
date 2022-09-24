// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a text object, sends it to the API, and returns the response
 * @param {object} text - The text object that contains the text's information.
 * @returns The data from the response.
 */
export const createText = async (text) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}text/save`,
    { ...text, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the text's ID and the ID of the text to delete
 * @param {string} text - The text id of the text you want to delete.
 * @returns The data is being returned.
 */
export const deleteText = async (text) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}text/delete`,
    { text },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the text's ID and the ID of the text to delete
 * @param {string[]} texts - The text id of the text you want to delete.
 * @returns The data is being returned.
 */
export const deleteTexts = async (texts) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}text/delete-many`,
    { texts },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the text's ID and text data to modify it
 * @param {object} textData - Text data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyText = async (textData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}text/save`,
    { ...textData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
