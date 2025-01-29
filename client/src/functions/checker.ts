export const numberChecker = (currentValue: any, value : string) => {
    // Permet uniquement les chiffres et le point décimal
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
        return value;
    }
    return currentValue;
  };