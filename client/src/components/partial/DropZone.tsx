import { CloudUpload } from "lucide-react";
import { useFormStore } from "@/store/useFormStore";

export function DropZone() {
  const { form, setForm } = useFormStore();

  const addFile = (e: any) => {
    const files = e.target.files;
    for (const file of files) {
      form.images.push(file);
    }
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
  };
  return (
    <div className="w-full h-60 rounded-md border-[1px] border-dashed border-blue-500 flex justify-center items-cente cursor-pointer transition-all hover:bg-bluehover relative">
      <div
        className="flex flex-col gap-3 justify-center items-center"
        onDragOver={handleDrop}
      >
        <CloudUpload className="stroke-blueprimary h-12 w-12" />
        <p className="font-regular text-sm text-grayprimary/60 text-wrap text-center break-words">
          Faites glisser ou cliquer ici pour ajouter vos fichiers
        </p>
        <input
          type="file"
          multiple
          onChange={addFile}
          className="absolute opacity-0 w-full h-full"
        />
      </div>
    </div>
  );
}
