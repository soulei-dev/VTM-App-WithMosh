import { useState } from "react";

interface ListingsProps {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<ListingsProps[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { request, data, error, loading };
};

export default useApi;
