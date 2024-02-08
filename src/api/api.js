import { get } from "@/api/base";

/**
 * 取得學校公告
 * @returns {Promise<*>}
 */
export const getNotification = () => {
  return get("/api/notification");
};

/**
 * 取得 unit
 * @param year
 * @param semester
 * @param department {string}
 * @returns {Promise<*>}
 */
export const getUnit = (year, semester, department) => {
  return get("/api/units", { year, semester, department });
};

/**
 * 取得 unit
 * @param year
 * @param semester
 * @returns {Promise<*>}
 */
export const getCategory = (year, semester) => {
  return get("/api/category", { year, semester });
};
