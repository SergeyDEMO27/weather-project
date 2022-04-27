export const getWeatherIconCode = (key: number): number => {
  switch (key) {
    case 1:
      return 1;
    case 2:
    case 3:
      return 2;
    case 45:
    case 48:
      return 3;
    case 51:
    case 53:
    case 55:
      return 4;
    case 56:
    case 57:
      return 5;
    case 61:
    case 63:
    case 65:
      return 6;
    case 66:
    case 67:
      return 7;
    case 71:
    case 73:
    case 75:
      return 8;
    case 77:
      return 9;
    case 80:
    case 81:
    case 82:
      return 10;
    case 85:
    case 86:
      return 11;
    case 95:
      return 12;
    case 96:
    case 99:
      return 13;
    default:
      return 1;
  }
};
