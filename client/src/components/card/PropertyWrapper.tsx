import Property from "./Property";
import { useProperties } from "@/hooks/useProperties";
export function PropertyWrapper() {
  const { properties, isLoading, isError } = useProperties();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error</div>;
  } else {
    return (
      <section className="flex gap-4 flex-col">
        {properties.map((property: any) => (
          <Property property={property} key={property.id} />
        ))}
      </section>
    );
  }
}
