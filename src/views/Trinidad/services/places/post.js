// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a place object, sends it to the API, and returns the response
 * @param {object} place - The place object that contains the place's information.
 * @returns The data from the response.
 */
export const createPlace = async (place) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}place/save`,
    { ...place, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the place's ID and the ID of the place to delete
 * @param {string} place - The place id of the place you want to delete.
 * @returns The data is being returned.
 */
export const deletePlace = async (place) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}place/delete`,
    { place },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the place's ID and the ID of the place to delete
 * @param {string[]} places - The place id of the place you want to delete.
 * @returns The data is being returned.
 */
export const deletePlaces = async (places) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}place/delete-many`,
    { places },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the place's ID and place data to modify it
 * @param {object} placeData - Place data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyPlace = async (placeData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}place/save`,
    { ...placeData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
