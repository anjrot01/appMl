const formatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 0
});

const translateCondition = word => {
  let wordTranslated = "";
  switch (word) {
    case "new":
      wordTranslated = "Nuevo";
      break;
    case "used":
      wordTranslated = "Usado";
      break;
    default:
      break;
  }
  return wordTranslated;
};

export { formatter, translateCondition };
