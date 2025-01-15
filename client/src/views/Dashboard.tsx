import { PropertyWrapper } from "@/components/card/PropertyWrapper";
import { ActionBar } from "@/components/partial/ActionBar";
import { Header } from "@/components/partial/Header";

export function Dashboard() {
  return (
    <>
      <Header />
      <section className="flex w-full pt-12 px-24 flex-col gap-12">
        <ActionBar />
        <PropertyWrapper />
      </section>
    </>
  );
}
