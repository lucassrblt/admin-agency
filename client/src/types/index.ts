// INTERFACE

export interface PropertyI {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  bien_type: BienTypeE;
  price: number;
  images: ImageI[];
}

export interface ImageI {
  id: number;
  property_id: number;
  order: number;
  url: string;
  updated_at: string;
  created_at: string;
}

export interface AlertContextStateI {
  message: string;
  type: AlertType;
  isVisible: boolean;
}

export interface AlertContextValueI {
  alert: AlertContextStateI;
  setAlert: (alert: AlertContextStateI) => void;
}

// ENUM

export enum BienTypeE {
  HOUSE = "house",
  APARTMENT = "apartment",
  LAND = "land",
  COMMERCIAL = "commercial",
}

// TYPEs
type AlertType = "success" | "error" | "warning" | "info" | "";
