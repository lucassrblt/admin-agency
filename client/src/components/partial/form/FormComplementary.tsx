import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/store/useFormStore";
import { Switch } from "@/components/ui/switch";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import { numberChecker } from "@/functions/checker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormComplementary() {
  return (
    <div className="flex flex-col gap-12 w-4/5">
      <form className="flex flex-wrap gap-10 w-full">
        <RoomSection />
        <PropertyAndParkingSection />
        <OtherSection />
        {/* <EnergySection /> */}
      </form>
      <FormFooter />
    </div>
  );
}

function RoomSection() {
  const { form, setRoom } = useFormStore();

  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="A propos des pièces"
        description="Remplissez ce qui concerne les pièces de votre annonce"
      />
      <div className="w-full flex flex-wrap gap-6">
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="bedroom">
            Nombre de chambres <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="bedroom"
            placeholder="Entrez le nombre de chambres"
            value={form.complementarySection.room.bedroom}
            onChange={(e) =>
              setRoom({
                bedroom: numberChecker(
                  form.complementarySection.room.bedroom,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="bathroom">
            Nombre de salle de bain <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="bathroom"
            placeholder="Entrez le nombre de salle de bain"
            value={form.complementarySection.room.bathroom}
            onChange={(e) =>
              setRoom({
                bathroom: numberChecker(
                  form.complementarySection.room.bathroom,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="waterroom">
            Nombre de salle d'eau <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="waterroom"
            placeholder="Entrez le nombre de salle d'eau"
            value={form.complementarySection.room.waterroom}
            onChange={(e) =>
              setRoom({
                waterroom: numberChecker(
                  form.complementarySection.room.waterroom,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="toilets">
            Nombre de toilettes <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="toilets"
            placeholder="Entrez le nombre de toilettes"
            value={form.complementarySection.room.toilets}
            onChange={(e) =>
              setRoom({
                toilets: numberChecker(
                  form.complementarySection.room.waterroom,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex items-center w-full space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setRoom({
                toiletsSeparate: value,
              })
            }
            checked={form.complementarySection.room.toiletsSeparate}
          />
          <Label htmlFor="draw-mode">Toilettes Séparés</Label>
        </div>
        <div className="w-full flex gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="draw-mode"
              onCheckedChange={(value) =>
                setRoom({
                  cellar: value,
                })
              }
              checked={form.complementarySection.room.cellar}
            />
            <Label htmlFor="draw-mode">Cave</Label>
          </div>
          {form.complementarySection.room.cellar && (
            <div className="flex flex-col w-1/3 gap-1.5">
              <Label htmlFor="toilets">
                Surface de la cave <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="toilets"
                placeholder="Entrez le nombre de toilettes"
                value={form.complementarySection.room.cellarSurface}
                onChange={(e) =>
                  setRoom({
                    cellarSurface: numberChecker(
                      form.complementarySection.room.cellarSurface,
                      e.target.value
                    ),
                  })
                }
              />
            </div>
          )}
        </div>
        <div className="w-full flex gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="draw-mode"
              onCheckedChange={(value) =>
                setRoom({
                  dinningRoom: value,
                })
              }
              checked={form.complementarySection.room.dinningRoom}
            />
            <Label htmlFor="draw-mode">Salle à manger </Label>
          </div>
          {form.complementarySection.room.dinningRoom && (
            <div className="flex flex-col w-1/3 gap-1.5">
              <Label htmlFor="toilets">
                Surface de la salle à manger{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="toilets"
                placeholder="Entrez le nombre de toilettes"
                value={form.complementarySection.room.dinningRoomSurface}
                onChange={(e) =>
                  setRoom({
                    dinningRoomSurface: numberChecker(
                      form.complementarySection.room.dinningRoomSurface,
                      e.target.value
                    ),
                  })
                }
              />
            </div>
          )}
        </div>

        <div className="w-full flex gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="draw-mode"
              onCheckedChange={(value) =>
                setRoom({
                  livingRoom: value,
                })
              }
              checked={form.complementarySection.room.livingRoom}
            />
            <Label htmlFor="draw-mode">Séjour</Label>
          </div>
          {form.complementarySection.room.livingRoom && (
            <div className="flex flex-col w-1/3 gap-1.5">
              <Label htmlFor="toilets">
                Surface du séjour <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="toilets"
                placeholder="Entrez le nombre de toilettes"
                value={form.complementarySection.room.livingRoomSurface}
                onChange={(e) =>
                  setRoom({
                    livingRoomSurface: numberChecker(
                      form.complementarySection.room.livingRoomSurface,
                      e.target.value
                    ),
                  })
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PropertyAndParkingSection() {
  const { form, setPropertyAndParking } = useFormStore();
  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Parking et Propriété"
        description="Remplissez les informations de parking et de propriété"
      />
      <div className="w-full flex flex-wrap gap-6">
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="buildYear">
            Année de construction <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="buildYear"
            placeholder="Entrez l'année de construction"
            value={form.complementarySection.propertyAndParking.buildYear}
            onChange={(e) =>
              setPropertyAndParking({
                buildYear: numberChecker(
                  form.complementarySection.propertyAndParking.buildYear,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setPropertyAndParking({ buildRecent: value })
            }
            checked={form.complementarySection.propertyAndParking.buildRecent}
          />
          <Label htmlFor="draw-mode">Récent</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setPropertyAndParking({ brandNew: value })
            }
            checked={form.complementarySection.propertyAndParking.brandNew}
          />
          <Label htmlFor="draw-mode">Refait à neuf</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setPropertyAndParking({ worksNeeded: value })
            }
            checked={form.complementarySection.propertyAndParking.worksNeeded}
          />
          <Label htmlFor="draw-mode">Travaux à prévoir</Label>
        </div>

        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="buildYear">
            Nombre de boxes <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="buildYear"
            placeholder="Entrez l'année de construction"
            value={form.complementarySection.propertyAndParking.boxes}
            onChange={(e) =>
              setPropertyAndParking({
                boxes: numberChecker(
                  form.complementarySection.propertyAndParking.boxes,
                  e.target.value
                ),
              })
            }
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setPropertyAndParking({ garage: value })
            }
            checked={form.complementarySection.propertyAndParking.garage}
          />
          <Label htmlFor="draw-mode">Garage</Label>
        </div>

        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="buildYear">
            Nombre de parking <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="buildYear"
            placeholder="Entrez l'année de construction"
            value={form.complementarySection.propertyAndParking.parkingPlaces}
            onChange={(e) =>
              setPropertyAndParking({
                parkingPlaces: numberChecker(
                  form.complementarySection.propertyAndParking.parkingPlaces,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="floor">
            Nombre d'étages <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="floor"
            placeholder="Entrez l'année de construction"
            value={form.complementarySection.propertyAndParking.floor}
            onChange={(e) =>
              setPropertyAndParking({
                floor: numberChecker(
                  form.complementarySection.propertyAndParking.floor,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="floor">
            Nombre de balcon <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="floor"
            placeholder="Entrez le nombre de balcon"
            value={form.complementarySection.propertyAndParking.balcony}
            onChange={(e) =>
              setPropertyAndParking({
                balcony: numberChecker(
                  form.complementarySection.propertyAndParking.balcony,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="balconySurface">Surface des balcons</Label>
          <Input
            type="text"
            id="balconySurface"
            placeholder="Entrez la surface des balcons"
            value={form.complementarySection.propertyAndParking.balconySurface}
            onChange={(e) =>
              setPropertyAndParking({
                balconySurface: numberChecker(
                  form.complementarySection.propertyAndParking.balconySurface,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="terrace">Nombre de terrases</Label>
          <Input
            type="text"
            id="terrace"
            placeholder="Entrez le nombre de terrases"
            value={form.complementarySection.propertyAndParking.terrace}
            onChange={(e) =>
              setPropertyAndParking({
                terrace: numberChecker(
                  form.complementarySection.propertyAndParking.terrace,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex items-center w-full space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setPropertyAndParking({ garden: value })
            }
            checked={form.complementarySection.propertyAndParking.garden}
          />
          <Label htmlFor="draw-mode">Jardin</Label>
        </div>
      </div>
    </div>
  );
}

function OtherSection() {
  const { form, setOther } = useFormStore();
  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Autres critères"
        description="Remplissez les autres critères de l'annonces"
      />
      <div className="w-full flex flex-wrap gap-6">
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                tvCable: value,
              })
            }
            checked={form.complementarySection.other.tvCable}
          />
          <Label htmlFor="draw-mode">Cable Tv</Label>
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                swimmingPool: value,
              })
            }
            checked={form.complementarySection.other.swimmingPool}
          />
          <Label htmlFor="draw-mode">Piscine</Label>
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                convertibleAttic: value,
              })
            }
            checked={form.complementarySection.other.convertibleAttic}
          />
          <Label htmlFor="draw-mode">Comble aménageable</Label>
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                view: value,
              })
            }
            checked={form.complementarySection.other.view}
          />
          <Label htmlFor="draw-mode">Vue</Label>
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                entrance: value,
              })
            }
            checked={form.complementarySection.other.entrance}
          />
          <Label htmlFor="draw-mode">Entrée</Label>
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                towards: value,
              })
            }
            checked={form.complementarySection.other.towards}
          />
          <Label htmlFor="draw-mode">Vis à vis</Label>
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) =>
              setOther({
                chimney: value,
              })
            }
            checked={form.complementarySection.other.chimney}
          />
          <Label htmlFor="draw-mode">Cheminée</Label>
        </div>
        <div className="flex flex-col w-fit min-w-[33%] gap-1.5">
          <Label htmlFor="bienType">
            Orientation <span className="text-red-500">*</span>
          </Label>
          <Select
            value={form.complementarySection.other.orientation}
            onValueChange={(value) =>
              setOther({
                orientation: value,
              })
            }
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Orientation du bien" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="NORTH">Nord</SelectItem>
              <SelectItem value="SOUTH">Sud</SelectItem>
              <SelectItem value="EAST">Est</SelectItem>
              <SelectItem value="WEST">Ouest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

// function EnergySection() {
//   const { form, setForm } = useFormStore();
//   return (
//     <div className="flex flex-col gap-8 w-full">
//       <FormHeader
//         title="Diagnostic de performance énergétique"
//         description="Remplissez les informations  propos du diagnostic de performance énergétique"
//       />
//       <div className="w-full flex flex-wrap gap-6">
//         <div className="flex flex-col w-fit min-w-[33%] gap-1.5">
//           <Label htmlFor="bienType">
//             Date de réalisation du DPE <span className="text-red-500">*</span>
//           </Label>
//           <Select
//             onValueChange={(value) =>
//               setForm({
//                 ...form,
//                 complementary: {
//                   ...form.complementary,
//                   dpeDate: value,
//                 },
//               })
//             }
//           >
//             <SelectTrigger className="w-full bg-white">
//               <SelectValue placeholder="Entrer une date" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="BEFORE">Avant le 1er juillet 2021</SelectItem>
//               <SelectItem value="AFTER">Après le 1er juillet 2021</SelectItem>
//               <SelectItem value="NOTSUBMITTED">Non soumis au DPE</SelectItem>
//               <SelectItem value="NULL">DPE vierge</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         {form.complementary.dpeDate &&
//           form.complementary.dpeDate == "BEFORE" && (
//             <div className="flex flex-col w-1/3 gap-1.5">
//               <Label htmlFor="title">
//                 Montant estimé (abonnement compris){" "}
//                 <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 type="text"
//                 id="title"
//                 placeholder="Entrez le montant estimé"
//                 required
//                 value={form.complementary.dpeEstimatedAmount}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     complementary: {
//                       ...form.complementary,
//                       dpeEstimatedAmount: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </div>
//           )}

//         {form.complementary.dpeDate &&
//           form.complementary.dpeDate === "AFTER" && (
//             <div className="flex flex-col w-1/3 gap-1.5">
//               <Label htmlFor="title">
//                 Montant minimum estimé (abonnement compris){" "}
//                 <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 type="text"
//                 id="title"
//                 placeholder="Entrez le montant mnimum estimé"
//                 required
//                 value={form.general.title}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     complementary: {
//                       ...form.complementary,
//                       dpeMinEstimatedAmount: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </div>
//           )}
//         {form.complementary.dpeDate &&
//           form.complementary.dpeDate === "AFTER" && (
//             <div className="flex flex-col w-1/3 gap-1.5">
//               <Label htmlFor="title">
//                 Montant maximum estimé (abonnement compris){" "}
//                 <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 type="text"
//                 id="title"
//                 placeholder="Entrez le montant maximum estimé"
//                 required
//                 value={form.complementary.dpeMaxEstimatedAmount}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     complementary: {
//                       ...form.complementary,
//                       dpeMaxEstimatedAmount: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </div>
//           )}
//         {form.complementary.dpeDate !== "NOTSUBMITTED" &&
//           form.complementary.dpeDate !== "NULL" &&
//           form.complementary.dpeDate && (
//             <DatePicker
//               label="Date d'indexation du prix de l'énérgie"
//               mainKey="complementary"
//               subkey="dpePriceIndex"
//             />
//           )}

//         {form.complementary.dpeDate &&
//           (form.complementary.dpeDate == "BEFORE" ||
//             form.complementary.dpeDate === "AFTER") && <EnergyComplementary />}
//       </div>
//     </div>
//   );
// }

// function EnergyComplementary() {
//   const { form, setForm } = useFormStore();

//   return (
//     <>
//       <div className="flex flex-col w-1/3 gap-1.5">
//         <Label htmlFor="title">
//           Consomation énergétique primaire (en kWh/m2/an)
//           <span className="text-red-500">*</span>
//         </Label>
//         <Input
//           type="text"
//           id="title"
//           placeholder="Entrez la consomation énergétique primaire"
//           required
//           value={form.complementary.primaryEnergyConsumption}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               complementary: {
//                 ...form.complementary,
//                 primaryEnergyConsumption: e.target.value,
//               },
//             })
//           }
//         />
//       </div>
//       <div className="flex flex-col w-1/3 gap-1.5">
//         <Label htmlFor="title">
//           Consomation énergétique finale (en kWh/m2/an)
//         </Label>
//         <Input
//           type="text"
//           id="title"
//           placeholder="Entrez la consomation énergétique finale"
//           required
//           value={form.complementary.finalEnergyConsumption}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               complementary: {
//                 ...form.complementary,
//                 finalEnergyConsumption: e.target.value,
//               },
//             })
//           }
//         />
//       </div>
//       <div className="flex flex-col w-fit min-w-[33%] gap-1.5">
//         <Label htmlFor="bienType">
//           Classe de consommation énérgétique{" "}
//           <span className="text-red-500">*</span>
//         </Label>
//         <Select
//           onValueChange={(value) =>
//             setForm({
//               ...form,
//               complementary: {
//                 ...form.complementary,
//                 classEnergyConsumption: value,
//               },
//             })
//           }
//         >
//           <SelectTrigger className="w-full bg-white">
//             <SelectValue placeholder="Type de transaction" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="A">
//               A (Logement très peu consommateur d'énergie)
//             </SelectItem>
//             <SelectItem value="B">B</SelectItem>
//             <SelectItem value="C">C</SelectItem>
//             <SelectItem value="D">D</SelectItem>
//             <SelectItem value="E">E</SelectItem>
//             <SelectItem value="F">F</SelectItem>
//             <SelectItem value="G">
//               G (Logement extremement consommateur d'énérgie)
//             </SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="flex flex-col w-1/3 gap-1.5">
//         <Label htmlFor="title">
//           Emission de gaz à effet de serre (en kgCO2/m2/an)
//           <span className="text-red-500">*</span>
//         </Label>
//         <Input
//           type="text"
//           id="title"
//           placeholder="Entrez l'émission de gaz à effet de serre"
//           required
//           value={form.complementary.primaryEnergyEmission}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               complementary: {
//                 ...form.complementary,
//                 primaryEnergyEmission: e.target.value,
//               },
//             })
//           }
//         />
//       </div>
//       <div className="flex flex-col w-fit min-w-[33%] gap-1.5">
//         <Label htmlFor="bienType">
//           Classe d'émission de gaz à effet de serre{" "}
//           <span className="text-red-500">*</span>
//         </Label>
//         <Select
//           onValueChange={(value) =>
//             setForm({
//               ...form,
//               complementary: {
//                 ...form.complementary,
//                 classEnergyEmission: value,
//               },
//             })
//           }
//         >
//           <SelectTrigger className="w-full bg-white">
//             <SelectValue placeholder="Type de transaction" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="A">A (Peu d'émissions de CO2)</SelectItem>
//             <SelectItem value="B">B</SelectItem>
//             <SelectItem value="C">C</SelectItem>
//             <SelectItem value="D">D</SelectItem>
//             <SelectItem value="E">E</SelectItem>
//             <SelectItem value="F">F</SelectItem>
//             <SelectItem value="G">
//               G (Emissions de CO2 très importantes)
//             </SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//     </>
//   );
// }
