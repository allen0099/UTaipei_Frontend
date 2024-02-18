import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetcher = (path, params = {}) => {
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

  return fetch(`${url}${path}`).then((res) => res.json());
};

export function useNotification(load) {
  const { data, error, isLoading } = useSWR(
    load ? "/api/notification" : null,
    fetcher,
  );

  return {
    notification: data || { data: [] },
    isLoading,
    isError: error,
  };
}

export function useUnit(year, semester, department) {
  const { data, error, isLoading } = useSWRImmutable(
    department
      ? `/api/units?year=${year}&semester=${semester}&department=${department}`
      : null,
    fetcher,
  );

  return {
    units: data?.data || [],
    isLoading,
    isError: error,
  };
}

export function useCategory(year, semester) {
  const { data, error, isLoading } = useSWRImmutable(
    `/api/category?year=${year}&semester=${semester}`,
    fetcher,
  );

  return {
    categories: data?.data || [],
    isLoading,
    isError: error,
  };
}

export default fetcher;
