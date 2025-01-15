import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { PropertyI } from "@/types";
import React from "react";
import { useNavigate } from "react-router";

export default function Property({ property }: { property: PropertyI }) {
  const [open, setOpen] = React.useState(false);
  const { refetch } = useProperties();
  const navigate = useNavigate();

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

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <img
          src={property.images[0].url}
          className="h-[200px] border-[1px] rounded-lg border-gray-200"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{property.title}</CardTitle>
        <CardDescription>{property.description}</CardDescription>
        <p>{property.price}</p>
      </CardContent>
      <CardFooter className="flex gap-4">
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
