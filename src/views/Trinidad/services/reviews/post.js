// @ts-check

import axios from "axios";
import config from "../../../../config";
// @ts-ignore
import { getAuth } from "../../../../auth/auth";

// cookies
// @ts-ignore
import { getCookie } from "../../../../utils/auth";

/**
 * Takes a review object, sends it to the API, and returns the response
 * @param {object} review - The review object that contains the review's information.
 * @returns The data from the response.
 */
export const createReview = async (review) => {
  // @ts-ignore
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}review/save`,
    { ...review, create: true },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the review's ID and the ID of the review to delete
 * @param {string} review - The review id of the review you want to delete.
 * @returns The data is being returned.
 */
export const deleteReview = async (review) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}review/delete`,
    { review },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the review's ID and the ID of the review to delete
 * @param {string[]} reviews - The review id of the review you want to delete.
 * @returns The data is being returned.
 */
export const deleteReviews = async (reviews) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}review/delete-many`,
    { reviews },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};

/**
 * Sends a POST request to the API with the review's ID and review data to modify it
 * @param {string} reviewId - The review id of the review you want to delete.
 * @param {object} reviewData - Review data: name, lastname, email, password, rpassword
 * @returns The data is being returned.
 */
export const modifyReview = async (reviewId, reviewData) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}review/modify`,
    { ...reviewData, reviewId },
    {
      // @ts-ignore
      headers: { ...getAuth, Authorization: `Bearer ${getCookie(config.basicKey)}` },
    }
  );
  const data = await response.data;
  return data;
};
