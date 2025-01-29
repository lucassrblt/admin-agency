import { Trash2, Image } from "lucide-react";
import { useFormStore } from "@/store/useFormStore";

export default function ImageC({ value }: { value: any }) {
  const { form, setForm } = useFormStore();

  const handleDelete = () => {
    const images = form.images.filter((image) => image !== value);
    setForm({ ...form, images });
  };

  return (
    <div className="rounded-xl w-fit h-fit px-3 py-3 border-[1px] border-gray-300 bg-whitesecondary flex gap-24 items-center">
      <div className="flex gap-6 items-center justify-between">
        <div className="flex bg-white items-center justify-center border border-gray-200 h-8 w-8 rounded-lg">
          <Image className="stroke-blue-600" size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-950 text-medium">{value.name}</p>
          <p className="text-sm text-regular text-slate-950/70">{value.size}</p>
        </div>
      </div>
      <div
        className="flex bg-white items-center justify-center border border-gray-200 h-8 w-8 rounded-lg cursor-pointer transition-all hover:bg-red-100/80 group"
        onClick={handleDelete}
      >
        <Trash2
          size={20}
          className="stroke-gray-500 group-hover:stroke-black"
        />
      </div>
    </div>
  );
}
