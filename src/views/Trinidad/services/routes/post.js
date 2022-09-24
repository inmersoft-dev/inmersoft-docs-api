// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a route object, sends it to the API, and returns the response
 * @param {object} route - The route object that contains the route's information.
 * @returns The data from the response.
 */
export const createRoute = async (route) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}route/save`,
    { ...route, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the route's ID and the ID of the route to delete
 * @param {string} route - The route id of the route you want to delete.
 * @returns The data is being returned.
 */
export const deleteRoute = async (route) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}route/delete`,
    { route },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the route's ID and the ID of the route to delete
 * @param {string[]} routes - The route id of the route you want to delete.
 * @returns The data is being returned.
 */
export const deleteRoutes = async (routes) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}route/delete-many`,
    { routes },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the route's ID and route data to modify it
 * @param {object} routeData - Route data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyRoute = async (routeData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}route/modify`,
    { ...routeData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
