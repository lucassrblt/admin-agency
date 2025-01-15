import { useQuery } from "react-query";

export function useProperties() {
  console.log("url", import.meta.env.VITE_BASE_URL);

  const city = "";
  const type = "";
  console.log("refetch");
  const { data, isLoading, isError, refetch } = useQuery(
    "properties",
    async () => {
      const response = await fetch(
        `http://localhost:8000/api/properties?city=${city}&type=${type}`
      );
      return response.json();
    }
  );

  return {
    properties: data?.data.properties,
    isLoading,
    isError,
    refetch,
  };
}

export function useProperty(id: string) {
  const { data, isLoading, isError } = useQuery(["property", id], async () => {
    const response = await fetch(`http://localhost:8000/api/properties/${id}`);
    return response.json();
  });

  if (!isLoading) console.log("dataaaa", data);

  return {
    property: data?.data,
    isLoading,
    isError,
  };
}
