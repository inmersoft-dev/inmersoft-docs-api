// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a campaign object, sends it to the API, and returns the response
 * @param {object} campaign - The campaign object that contains the campaign's information.
 * @returns The data from the response.
 */
export const createCampaign = async (campaign) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}campaign/save`,
    { ...campaign, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the campaign's ID and the ID of the campaign to delete
 * @param {string} campaign - The campaign id of the campaign you want to delete.
 * @returns The data is being returned.
 */
export const deleteCampaign = async (campaign) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}campaign/delete`,
    { campaign },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the campaign's ID and the ID of the campaign to delete
 * @param {string[]} campaigns - The campaign id of the campaign you want to delete.
 * @returns The data is being returned.
 */
export const deleteCampaigns = async (campaigns) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}campaign/delete-many`,
    { campaigns },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the campaign's ID and campaign data to modify it
 * @param {object} campaignData - Campaign data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyCampaign = async (campaignData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}campaign/save`,
    { ...campaignData },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
