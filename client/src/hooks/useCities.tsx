import { useQuery } from "react-query";

export default function useCities() {
  const { data, isLoading, isError } = useQuery("cities", async () => {
    const response = await fetch("http://localhost:8000/api/cities");
    return response.json();
  });

  return {
    cities: data?.data,
    isLoading,
    isError,
  };
}
