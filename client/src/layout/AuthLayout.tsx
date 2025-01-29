import AlertComponent from "@/components/partial/AlertComponent";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AlertComponent />
      {children}
    </div>
  );
}
