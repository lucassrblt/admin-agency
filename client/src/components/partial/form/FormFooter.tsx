import { Button } from "@/components/ui/button";
import { useFormStore } from "@/store/useFormStore";
import { useAlert } from "@/hooks/useAlert";
import { usePropertyStore } from "@/store/usePropertyStore";
export default function FormFooter() {
  const { form } = useFormStore();
  const { currentTab, setCurrentTab, tab } = useFormStore();
  const { currentPropertyId, setCurrentPropertyId } = usePropertyStore();
  const context = useAlert();
  const { setAlert } = context;

  const handleNext = async () => {
    if (currentTab === "Complementaire") {
      console.log("form send", form);
      const response = await submitForm(form);

      if (response) setCurrentTab(tab[tab.indexOf(currentTab) + 1]);
    } else {
      setCurrentTab(tab[tab.indexOf(currentTab) + 1]);
    }
  };

  const handlePrevious = () => {
    if (tab.indexOf(currentTab) === 0) return;
    setCurrentTab(tab[tab.indexOf(currentTab) - 1]);
  };

  const submitForm = async (form: any) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/properties`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(form),
        }
      );
      const data = await response.json();
      console.log("the response", data);
      if (response.status === 422) {
        setAlert({
          type: "error",
          message: data.message,
          isVisible: true,
        });
        return false;
      }
      if (data.success) {
        setCurrentPropertyId(data.data.id);
        return true;
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const submitDpe = async (form: any) => {
    const formDpe = new FormData();
    formDpe.append("energy", form.dpeImg);
    formDpe.append("ges", form.gesImg);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/properties/${currentPropertyId}/dpe`,
        {
          headers: {
            Accept: "application/json",
          },
          method: "POST",
          body: formDpe,
        }
      );
      const data = await response.json();
      if (response.status === 422) {
        setAlert({
          type: "error",
          message: data.message,
          isVisible: true,
        });
        return false;
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        onClick={handlePrevious}
        disabled={tab.indexOf(currentTab) === 0}
      >
        Retour
      </Button>
      <Button onClick={handleNext}>
        {currentTab === tab[tab.length - 1] ? "Création" : "Suivant"}
      </Button>
    </div>
  );
}
