export default function FormHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full pb-4 border-b-[1px] border-gray-300 gap-8 h-fit">
      <h4 className="text-lg font-regular text-gray-900">{title}</h4>
      <p className="text-sm font-light text-slate-400">{description}</p>
    </div>
  );
}
