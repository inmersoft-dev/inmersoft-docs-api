// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a event object, sends it to the API, and returns the response
 * @param {object} event - The event object that contains the event's information.
 * @returns The data from the response.
 */
export const createEvent = async (event) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}event/save`,
    { ...event, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the event's ID and the ID of the event to delete
 * @param {string} event - The event id of the event you want to delete.
 * @returns The data is being returned.
 */
export const deleteEvent = async (event) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}event/delete`,
    { event },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the event's ID and the ID of the event to delete
 * @param {string[]} events - The event id of the event you want to delete.
 * @returns The data is being returned.
 */
export const deleteEvents = async (events) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}event/delete-many`,
    { events },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the event's ID and event data to modify it
 * @param {object} eventData - Event data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyEvent = async (eventData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}event/save`,
    { ...eventData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
