import { ApiResponse } from "apisauce";
import { useState } from "react";

interface ListingsProps {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const useApi = (apiFunc: { (): Promise<ApiResponse<any, any>>; (): any }) => {
  const [data, setData] = useState<ListingsProps[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    console.log(response.data);
    setError(false);
    setData(response.data);
  };

  return { request, data, error, loading };
};

export default useApi;
