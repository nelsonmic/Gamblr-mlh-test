export const capitalizeFirstLetter = (input: string): string => {
  return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : input;
};