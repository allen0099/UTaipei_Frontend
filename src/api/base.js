const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const http = (path, options = {}) => {
  let url = baseUrl;

  if (!path.startsWith("/")) {
    path = `${baseUrl}/${path}`;
  }
  if (baseUrl.endsWith("/")) {
    url = baseUrl.slice(0, -1);
  }

  return fetch(`${url}${path}`, options).then((res) => res.json());
};

const get = (path, options = {}) => http(path, { ...options, method: "GET" });
const post = (path, options = {}) => http(path, { ...options, method: "POST" });
const put = (path, options = {}) => http(path, { ...options, method: "PUT" });
const del = (path, options = {}) =>
  http(path, { ...options, method: "DELETE" });

export { get, post, put, del };
