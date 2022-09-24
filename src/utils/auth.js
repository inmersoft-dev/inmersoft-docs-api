/**
 * Takes a name, expiration, and value, and creates a cookie with those values
 * @param {string} name - The name of the cookie
 * @param {string} expiration - "2019-12-31 23:59:59"
 * @param {any} value - The value of the cookie.
 */
export const createCookie = (name, expiration, value) => {
  const spaceSplit = expiration.split(" ");
  const dashSplit = spaceSplit[0].split("-");
  const colonSplit = spaceSplit[1].split(":");
  const d = new Date(
    Number(dashSplit[0]),
    Number(dashSplit[1]),
    Number(dashSplit[2]),
    Number(colonSplit[0]),
    Number(colonSplit[1]),
    Number(colonSplit[2])
  );
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires}";path=/`;
};

/**
 * Takes a cookie name as an argument and returns the value of that cookie
 * @param {string} cname - The name of the cookie you want to get.
 * @returns {any} The value of the cookie with the name cname.
 */
export const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

/**
 * Removes a cookie
 * @param {string} name
 */
export const deleteCookie = (name) => {
  document.cookie = `${name} + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"`;
};
