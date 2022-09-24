// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a survey object, sends it to the API, and returns the response
 * @param {object} survey - The survey object that contains the survey's information.
 * @returns The data from the response.
 */
export const createSurvey = async (survey) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}survey/save`,
    { ...survey, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the survey's ID and the ID of the survey to delete
 * @param {string} survey - The survey id of the survey you want to delete.
 * @returns The data is being returned.
 */
export const deleteSurvey = async (survey) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}survey/delete`,
    { survey },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the survey's ID and the ID of the survey to delete
 * @param {string[]} surveys - The survey id of the survey you want to delete.
 * @returns The data is being returned.
 */
export const deleteSurveys = async (surveys) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}survey/delete-many`,
    { surveys },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the survey's ID and survey data to modify it
 * @param {object} surveyData - Survey data
 * @returns The data is being returned.
 */
export const modifySurvey = async (surveyData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}survey/save`,
    { ...surveyData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
