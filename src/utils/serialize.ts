export const serialize = (num: number): string => {
  if (num === 0) return "0";

  if (Math.abs(num) < 10) {
    if (num < 0) {
      return "-0" + Math.abs(num);
    } else {
      return "0" + num;
    }
  } else {
    return String(num);
  }
};