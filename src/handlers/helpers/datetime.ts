import { serialize } from "utils/serialize";

export const secondsToHms = (d: number): [string, string, string] => {
  const gtZero = (n: number) => n > 0;
  const isNum = (n: any) => typeof n === "number" && !Object.is(NaN, n);

  const numToTime = (d: number) => {
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    return [h, m, s];
  };

  const [h, m, s] = numToTime(d);

  return [
    isNum(h) && gtZero(h) ? serialize(h) : "00",
    isNum(m) && gtZero(m) ? serialize(m) : "00",
    isNum(s) && gtZero(s) ? serialize(s) : "00",
  ];
};