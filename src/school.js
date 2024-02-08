export const get_semester = () => {
  const today = new Date();
  return today.getMonth() > 5 ? 1 : 2;
};

export const get_school_year = () => {
  const today = new Date();
  return today.getFullYear() - (today.getMonth() > 5 ? 1911 : 1912);
};
