import { useQuery } from "react-query";
import { usePropertyStore } from "@/store/usePropertyStore";

export function useProperties() {
  const { filter } = usePropertyStore();
  const { data, isLoading, isError, refetch } = useQuery(
    ["properties", filter.city, filter.type],
    async () => {
      const response = await fetch(
        `http://localhost:8000/api/properties?city=${filter.city}&type=${filter.type}`
      );
      return response.json();
    }
  );

  console.log("data properties on refetch", data?.data?.properties);

  return {
    properties: data?.data?.properties,
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

  return {
    property: data?.data,
    isLoading,
    isError,
  };
}
