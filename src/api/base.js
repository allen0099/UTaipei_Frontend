const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * The http function is a wrapper around the fetch function.
 * @param path {string}
 * @param params {object}
 * @param init {RequestInit}
 * @returns {Promise<any>}
 */
const http = (path, params = {}, init = {}) => {
  let url = baseUrl;

  if (!path.startsWith("/")) {
    path = `${baseUrl}/${path}`;
  }
  if (baseUrl.endsWith("/")) {
    url = baseUrl.slice(0, -1);
  }

  if (Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams(params);
    path += `?${searchParams.toString()}`;
  }

  return fetch(`${url}${path}`, init).then((res) => res.json());
};

/**
 * The get method is a wrapper around the http function.
 * @param path {string}
 * @param params {object}
 * @param init {RequestInit}
 * @returns {Promise<any>}
 */
const get = (path, params = {}, init = {}) =>
  http(path, params, { ...init, method: "GET" });

/**
 * The post method is a wrapper around the http function.
 * @param path {string}
 * @param params {object}
 * @param init {RequestInit}
 * @returns {Promise<any>}
 */
const post = (path, params = {}, init = {}) =>
  http(path, params, { ...init, method: "POST" });

/**
 * The put method is a wrapper around the http function.
 * @param path {string}
 * @param params {object}
 * @param init {RequestInit}
 * @returns {Promise<any>}
 */
const put = (path, params = {}, init = {}) =>
  http(path, params, { ...init, method: "PUT" });

/**
 * The del method is a wrapper around the http function.
 * @param path {string}
 * @param params {object}
 * @param init {RequestInit}
 * @returns {Promise<any>}
 */
const del = (path, params = {}, init = {}) =>
  http(path, params, { ...init, method: "DELETE" });

export { get, post, put, del };
