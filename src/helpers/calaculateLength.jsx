const getFactor = (type) => {
  switch (type) {
    case "km":
      return 1000;
      break;
    case "m":
      // code block
      return 1;
      break;
    case "feet":
      return 1 / 3.28084;
      break;
    case "inch":
      return 1 / 39.37008;
      break;
    case "cm":
      // code block
      return 1 / 100;
      break;
    case "mm":
      return 1 / 1000;
    case "nm":
      1 / 1000000000;
      return;
    default:
      return 1;
    // code block
  }
};
export const calculateLength = (from, to, ipValue) => {
  const fromFactor = getFactor(from);
  const toFactor = getFactor(to);
  const output = parseFloat(fromFactor / toFactor) * parseFloat(ipValue);
  return output;
};
