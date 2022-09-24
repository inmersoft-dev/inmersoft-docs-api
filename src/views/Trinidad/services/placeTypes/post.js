// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a placeType object, sends it to the API, and returns the response
 * @param {object} placeType - The placeType object that contains the placeType's information.
 * @returns The data from the response.
 */
export const createPlaceType = async (placeType) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}placeType/save`,
    { ...placeType, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the placeType's ID and the ID of the placeType to delete
 * @param {string} placeType - The placeType id of the placeType you want to delete.
 * @returns The data is being returned.
 */
export const deletePlaceType = async (placeType) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}placeType/delete`,
    { placeType },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the placeType's ID and the ID of the placeType to delete
 * @param {string[]} placeTypes - The placeType id of the placeType you want to delete.
 * @returns The data is being returned.
 */
export const deletePlaceTypes = async (placeTypes) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}placeType/delete-many`,
    { placeTypes },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the placeType's ID and placeType data to modify it
 * @param {string} placeTypeId - The placeType id of the placeType you want to delete.
 * @param {object} placeTypeData - PlaceType data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyPlaceType = async (placeTypeId, placeTypeData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}placeType/modify`,
    { ...placeTypeData, placeTypeId },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
