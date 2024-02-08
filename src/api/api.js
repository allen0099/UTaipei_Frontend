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
 * 取得類別列表
 * @param year
 * @param semester
 * @returns {Promise<*>}
 */
export const getCategory = (year, semester) => {
  return get("/api/category", { year, semester });
};

/**
 * 取得課程列表
 * @param year
 * @param semester
 * @param degree {string}
 * @param department {string}
 * @param unit {string}
 * @param grade {string}
 * @param category {string}
 * @param subject {string}
 * @param teacher {string}
 * @returns {Promise<*>}
 */
export const getCourse = (
  year,
  semester,
  degree,
  department,
  unit,
  grade,
  category,
  subject,
  teacher,
) => {
  // TODO: API 尚未完成
  return get("/api/course", {
    year,
    semester,
    degree,
    department,
    unit,
    grade,
    category,
    subject,
    teacher,
  });
};
