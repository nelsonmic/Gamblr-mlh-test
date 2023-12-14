import { debug } from "./debugger";

export const capitalizeFirstLetter = (input: string | null | undefined | object | any[]): string => {
  debug("info",`Happening at Capitalize: ${input}`)
  if (typeof input === 'string' && input.length > 0) {
    return input[0].toUpperCase() + input.slice(1);
  }
  return '';
};
