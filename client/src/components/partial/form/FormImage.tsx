import FormHeader from "./FormHeader";
import { DropZone } from "../DropZone";
import { useFormStore } from "@/store/useFormStore";
import ImageC from "../ImageC";
import FormFooter from "./FormFooter";

export default function FormImages() {
  const { form, setForm } = useFormStore();
  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-md">
      <FormHeader
        title="Images"
        description="Remplissez les images correspondant à votre annonces"
      />
      <form className="flex flex-col gap-6 w-full">
        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°1</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°2</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°3</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°4</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°5</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°6</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°7</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°8</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°9</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°10</Label>
          <Input id="picture" type="file" />
        </div> */}
        <DropZone />
        <div className="flex flex-col gap-4">
          {form.images.map((image, index) => (
            <ImageC key={index} value={image} />
          ))}
        </div>
      </form>
      <FormFooter />
    </div>
  );
}
