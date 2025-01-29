import Sidebar from "@/components/partial/Sidebar";
import ContentLayout from "./ContentLayout";
import AlertComponent from "@/components/partial/AlertComponent";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full bg-sidebar overflow-hidden py-1 justify-center">
      <AlertComponent />
      {/* <Sidebar /> */}
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
}
