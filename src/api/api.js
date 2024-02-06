import { get } from "@/api/base";

export const getNotification = () => {
  return get("/api/notification");
};
