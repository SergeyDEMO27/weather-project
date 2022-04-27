export const getWindDirection = (direction: number): string => {
  if ((direction >= 350 && direction <= 360) || direction <= 10) {
    return "С";
  } else if (direction > 11 && direction < 80) {
    return "СВ";
  } else if (direction >= 80 && direction <= 100) {
    return "В";
  } else if (direction > 100 && direction < 170) {
    return "ЮВ";
  } else if (direction >= 170 && direction <= 190) {
    return "Ю";
  } else if (direction > 190 && direction <= 260) {
    return "ЮЗ";
  } else if (direction >= 260 && direction <= 280) {
    return "З";
  } else if (direction > 280 && direction < 350) {
    return "СЗ";
  }
  return "С";
};
