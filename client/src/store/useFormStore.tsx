import { BienTypeE, TransactionTypeE } from "@/types";
import { create } from "zustand";

type FormType = {
  dpeForm: any;
  form: {
    targetSection: {
      bienType: BienTypeE | undefined;
      transactionType: TransactionTypeE | undefined;
    };
    generalSection: {
      general: {
        id: string;
        title: string;
        description: string;
        availabilityDate: string;
        subtype: string;
        surface: number | undefined;
        landSurface: number | undefined;
        maxSurface: number | undefined;
        room: number | undefined;
      };
      priceForBuy: {
        honoraryFor: string;
        honorary: number | undefined;
        price: number | undefined;
        landPrice: number | undefined;
        priceSurface: number | undefined;
        priceWithHonorary: number | undefined;
        coownership: boolean;
      };
      priceForRent: {
        tenseArea: boolean;
        rentBase: number | undefined;
        rentBySurface: number | undefined;
        rentComplementary: number | undefined;
        charges: string;
        chargesValue: number | undefined;
        rentWithCharges: number | undefined;
        guarantee: number | undefined;
      };
      agencyFees: {
        honoraryTTCAmount: number | undefined;
        inventoryFees: number | undefined;
      };
      localisation: {
        address: string;
        city: string;
        zipcode: string;
      };
    };
    complementarySection: {
      room: {
        bedroom: number | undefined;
        bathroom: number | undefined;
        waterroom: number | undefined;
        toilets: number | undefined;
        toiletsSeparate: boolean;
        cellar: boolean;
        cellarSurface: number | undefined;
        dinningRoom: boolean;
        dinningRoomSurface: number | undefined;
        livingRoom: boolean;
        livingRoomSurface: number | undefined;
      };
      propertyAndParking: {
        buildYear: number | undefined;
        buildRecent: boolean;
        brandNew: boolean;
        worksNeeded: boolean;
        boxes: number | undefined;
        garage: boolean;
        parkingPlaces: number | undefined;
        floor: number | undefined;
        balcony: number | undefined;
        balconySurface: number | undefined;
        terrace: number | undefined;
        garden: boolean;
      };
      other: {
        tvCable: boolean;
        swimmingPool: boolean;
        convertibleAttic: boolean;
        view: boolean;
        entrance: boolean;
        towards: boolean;
        chimney: boolean;
        orientation: string;
      };
    };
  };
  currentTab: string;
  tab: string[];
};

type Action = {
  setDpeForm: (dpeForm: any) => void;
  setForm: (form: any) => void;
  setCurrentTab: (currentTab: string) => void;
  setTarget: (target: Partial<FormType["form"]["targetSection"]>) => void;
  setGeneral: (
    general: Partial<FormType["form"]["generalSection"]["general"]>
  ) => void;
  setPriceForBuy: (
    priceForBuy: Partial<FormType["form"]["generalSection"]["priceForBuy"]>
  ) => void;
  setPriceForRent: (
    priceForRent: Partial<FormType["form"]["generalSection"]["priceForRent"]>
  ) => void;
  setAgencyFees: (
    agencyFees: Partial<FormType["form"]["generalSection"]["agencyFees"]>
  ) => void;
  setLocalisation: (
    localisation: Partial<FormType["form"]["generalSection"]["localisation"]>
  ) => void;
  setRoom: (
    room: Partial<FormType["form"]["complementarySection"]["room"]>
  ) => void;
  setPropertyAndParking: (
    propertyAndParking: Partial<
      FormType["form"]["complementarySection"]["propertyAndParking"]
    >
  ) => void;
  setOther: (
    other: Partial<FormType["form"]["complementarySection"]["other"]>
  ) => void;
  setDpe: (
    dpe: Partial<FormType["form"]["complementarySection"]["dpe"]>
  ) => void;
};

export const form = {
  targetSection: {
    bienType: undefined,
    transactionType: undefined,
  },
  generalSection: {
    general: {
      id: "",
      title: "",
      description: "",
      availabilityDate: "",
      subtype: "",
      surface: undefined,
      landSurface: undefined,
      maxSurface: undefined,
      room: undefined,
    },
    priceForBuy: {
      honoraryFor: "",
      honorary: undefined,
      price: undefined,
      landPrice: undefined,
      priceSurface: undefined,
      priceWithHonorary: undefined,
      coownership: false,
    },
    priceForRent: {
      tenseArea: false,
      rentBase: undefined,
      rentBySurface: undefined,
      rentComplementary: undefined,
      charges: "",
      chargesValue: undefined,
      rentWithCharges: undefined,
      guarantee: undefined,
    },
    agencyFees: {
      honoraryTTCAmount: undefined,
      inventoryFees: undefined,
    },
    localisation: {
      address: "",
      city: "",
      zipcode: "",
    },
  },
  complementarySection: {
    room: {
      bedroom: undefined,
      bathroom: undefined,
      waterroom: undefined,
      toilets: undefined,
      toiletsSeparate: false,
      cellar: false,
      cellarSurface: undefined,
      dinningRoom: false,
      dinningRoomSurface: undefined,
      livingRoom: false,
      livingRoomSurface: undefined,
    },
    propertyAndParking: {
      buildYear: undefined,
      buildRecent: false,
      brandNew: false,
      worksNeeded: false,
      boxes: undefined,
      garage: false,
      parkingPlaces: undefined,
      floor: undefined,
      balcony: undefined,
      balconySurface: undefined,
      terrace: undefined,
      garden: false,
    },
    other: {
      tvCable: false,
      swimmingPool: false,
      convertibleAttic: false,
      view: false,
      entrance: false,
      towards: false,
      chimney: false,
      orientation: "",
    },
    // dpe: {
    //   dpeDate: "",
    //   dpeImg: "",
    //   gesImg: "",
    //   // dpePriceIndex: "",
    //   // dpeEstimatedAmount: "",
    //   // dpeMinEstimatedAmount: "",
    //   // dpeMaxEstimatedAmount: "",
    //   // primaryEnergyConsumption: "",
    //   // finalEnergyConsumption: "",
    //   // classEnergyConsumption: undefined,
    //   // primaryEnergyEmission: "",
    //   // primaryEnergyConsumptionIndex: "",
    //   // classEnergyEmission: undefined,
    // },
  },
};

const initialDpeForm = {
  dpeDate: "",
  dpeImg: undefined,
  gesImg: undefined,
};

export const useFormStore = create<FormType & Action>((set) => ({
  form: form,
  dpeForm: initialDpeForm,
  setDpeForm: (dpeForm) => set({ dpeForm }),
  currentTab: "Ciblage",
  tab: ["Ciblage", "Général", "Complementaire", "Dpe", "Images"],
  setCurrentTab: (currentTab) => set({ currentTab }),
  setForm: (form) => set({ form }),
  setTarget: (targetUpdate) =>
    set((state) => ({
      form: {
        ...state.form,
        targetSection: {
          ...state.form.targetSection,
          ...targetUpdate,
        },
      },
    })),
  setGeneral: (generalUpdate) =>
    set((state) => ({
      form: {
        ...state.form,
        generalSection: {
          ...state.form.generalSection,
          general: {
            ...state.form.generalSection.general,
            ...generalUpdate,
          },
        },
      },
    })),
  setPriceForBuy: (priceForBuyUpdate) => {
    set((state) => ({
      form: {
        ...state.form,
        generalSection: {
          ...state.form.generalSection,
          priceForBuy: {
            ...state.form.generalSection.priceForBuy,
            ...priceForBuyUpdate,
          },
        },
      },
    }));
  },
  setPriceForRent: (priceForRentUpdate) =>
    set((state) => ({
      form: {
        ...state.form,
        generalSection: {
          ...state.form.generalSection,
          priceForRent: {
            ...state.form.generalSection.priceForRent,
            ...priceForRentUpdate,
          },
        },
      },
    })),
  setAgencyFees: (agencyFeesUpdate) => {
    set((state) => ({
      form: {
        ...state.form,
        generalSection: {
          ...state.form.generalSection,
          agencyFees: {
            ...state.form.generalSection.agencyFees,
            ...agencyFeesUpdate,
          },
        },
      },
    }));
  },
  setLocalisation: (localisationUpdate) =>
    set((state) => ({
      form: {
        ...state.form,
        generalSection: {
          ...state.form.generalSection,
          localisation: {
            ...state.form.generalSection.localisation,
            ...localisationUpdate,
          },
        },
      },
    })),
  setRoom: (roomUpdate) => {
    set((state) => ({
      form: {
        ...state.form,
        complementarySection: {
          ...state.form.complementarySection,
          room: {
            ...state.form.complementarySection.room,
            ...roomUpdate,
          },
        },
      },
    }));
  },
  setPropertyAndParking: (propertyAndParkingUpdate) => {
    set((state) => ({
      form: {
        ...state.form,
        complementarySection: {
          ...state.form.complementarySection,
          propertyAndParking: {
            ...state.form.complementarySection.propertyAndParking,
            ...propertyAndParkingUpdate,
          },
        },
      },
    }));
  },
  setOther: (otherUpdate) => {
    set((state) => ({
      form: {
        ...state.form,
        complementarySection: {
          ...state.form.complementarySection,
          other: {
            ...state.form.complementarySection.other,
            ...otherUpdate,
          },
        },
      },
    }));
  },
  setDpe: (dpeUpdate) => {
    set((state) => ({
      form: {
        ...state.form,
        complementarySection: {
          ...state.form.complementarySection,
          dpe: {
            ...state.form.complementarySection.dpe,
            ...dpeUpdate,
          },
        },
      },
    }));
  },
}));
