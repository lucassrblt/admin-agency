// INTERFACE

// Localisation Interface
interface PropertyLocalisation {
  id: number;
  propertyId: number;
  address: string;
  city: string;
  zipcode: string;
  createdAt: string;
  updatedAt: string;
}

// Target Interface
interface PropertyTarget {
  id: number;
  propertyId: number;
  bienType: "HOUSE" | string;
  transactionType: "SALE" | string;
  createdAt: string;
  updatedAt: string;
}

// Room Interface
interface PropertyRoom {
  id: number;
  propertyId: number;
  bedroom: number;
  bathroom: number;
  waterroom: null | number;
  toilets: number;
  toiletsSeparate: boolean;
  cellar: boolean;
  cellarSurface: number;
  dinningRoom: boolean;
  dinningRoomSurface: number;
  livingRoom: boolean;
  livingRoomSurface: number;
  createdAt: string;
  updatedAt: string;
}

// Other Properties Interface
interface PropertyOther {
  id: number;
  propertyId: number;
  buildYear: number;
  buildRecent: boolean;
  brandNew: boolean;
  worksNeeded: boolean;
  boxes: null | number;
  garage: boolean;
  parkingPlaces: number;
  floor: number;
  balcony: number;
  balconySurface: number;
  terrace: null | number;
  garden: boolean;
  tvCable: boolean;
  swimmingPool: boolean;
  convertibleAttic: boolean;
  view: boolean;
  entrance: boolean;
  towards: boolean;
  chimney: boolean;
  orientation: string;
  createdAt: string;
  updatedAt: string;
}

// Agency Fees Interface
interface PropertyAgencyFees {
  id: number;
  propertyId: number;
  honoraryTtcAmount: null | string;
  inventoryFees: string;
  createdAt: string;
  updatedAt: string;
}

// Price Buy Interface
interface PropertyPriceBuy {
  id: number;
  propertyId: number;
  honoraryFor: "BUYER" | string;
  honorary: string;
  price: string;
  landPrice: null | string;
  priceSurface: string;
  priceWithHonorary: string;
  coownership: boolean;
  createdAt: string;
  updatedAt: string;
}

// DPE Interface
interface PropertyDpes {
  id: number;
  propertyId: number;
  energy: string;
  ges: string;
  createdAt: string;
  updatedAt: string;
}

// Image Interface
interface PropertyImage {
  id: number;
  propertyId: number;
  url: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// Main Property Interface
export interface PropertyI {
  id: number;
  title: string;
  description: string;
  availabilityDate: null | string;
  subtype: string;
  surface: number;
  room: number;
  createdAt: string;
  updatedAt: string;
  propertyLocalisation: PropertyLocalisation;
  propertyTarget: PropertyTarget;
  propertyRoom: PropertyRoom;
  propertyOther: PropertyOther;
  propertyAgencyFees: PropertyAgencyFees;
  propertyPriceBuy: PropertyPriceBuy;
  propertyPriceRent: null | any;
  propertyDpes: PropertyDpes;
  propertyImages: PropertyImage[];
  isArchived: boolean;
}

export interface UserI {
  company: CompanyI;
  profile: ProfileI | {};
  email: string;
  token: string;
}

interface CompanyI {
  name: string;
  logo: string;
  website: string;
}

interface ProfileI {}

export interface AlertContextStateI {
  message: string;
  type: AlertType;
  isVisible: boolean;
}

export interface AuthContextI {
  user: UserI | {};
  setUser: (user: UserI) => void;
}

export interface AlertContextValueI {
  alert: AlertContextStateI;
  setAlert: (alert: AlertContextStateI) => void;
}

// ENUM

export enum BienTypeE {
  HOUSE = "Maison",
  APARTMENT = "Appartement",
  PARKING = "Parking",
  LAND = "Terrain",
}

export enum TransactionTypeE {
  SALE = "SALE",
  RENT = "RENT",
}

export enum OrientationE {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = "west",
}

export enum EnergyClassE {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}

// TYPEs
type AlertType = "success" | "error" | "warning" | "info" | "";

export const bienType = {
  HOUSE: "Maison",
  APPARTMENT: "Appartement",
  LAND: "Terrain",
  PARKING: "Parking",
};
