export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col ml-[240px] h-full w-full px-12 gap-6 bg-whiteprimary rounded-l-2xl border-[1px] overflow-x-hidden overflow-y-scroll border-border/50">
      {children}
    </section>
  );
}
