import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProperties } from "@/hooks/useProperties";
import { Button } from "@/components/ui/button";
import { PropertyI, BienTypeE, bienType } from "@/types";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Property({ property }: { property: PropertyI }) {
  const [open, setOpen] = React.useState(false);
  const { refetch } = useProperties();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("property", property);
  });

  const handleEdit = () => {
    navigate(`/annonce/${property.id}`, { replace: true });
  };

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/properties/${property.id}`, {
      method: "DELETE",
    }).then(() => {
      refetch();
      setOpen(false);
    });
  };

  const handleSwitchChange = (value: boolean) => {
    const body = { archive: value };
    fetch(`http://localhost:8000/api/properties/${property.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data;
      });
  };

  const transformPropertyBienType = (bienType) => {
    return bienType === "HOUSE"
      ? "Maison"
      : "APPARTMENT"
      ? "Appartement"
      : "Terrain";
  };

  const transformDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <Card className="w-full flex" onClick={() => property}>
      <CardHeader className="border-r-[1px] border-gray-300 flex gap-8 justify-center flex-row min-w-3/5">
        <img
          src={property.propertyImages[0]?.url}
          className="h-[80px] rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <p>
            {property.propertyTarget.transactionType === "SALE"
              ? property.propertyPriceBuy.priceWithHonorary
              : property.propertyPriceRent.rentWithCharges}
          </p>
          <p>{`${transformPropertyBienType(
            property.propertyTarget.bienType
          )} - ${property.room} pièce(s) - ${property.surface} m2`}</p>
          <p>{`${property.propertyLocalisation.city} (${property.propertyLocalisation.zipcode})`}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col border-r-[1px] border-gray-300 min-w-1/5">
        <p>{`Créé le ${transformDate(property.createdAt)}`}</p>
        <p>{`Modifier le ${transformDate(property.updatedAt)}`}</p>
      </CardContent>
      <CardFooter className="flex gap-4 flex-col min-w-1/5">
        <div className="flex items-center space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={handleSwitchChange}
            checked={property.isArchived ? true : false}
          />
          <Label htmlFor="draw-mode">Archiver</Label>
        </div>
        <Button variant="outline" onClick={handleEdit}>
          Modifier
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive">Supprimer</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Etes-vous sur ?</DialogTitle>
              <DialogDescription>
                Cette action est irréversible et aucun retour en arrière ne sera
                possible.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Confirmer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
