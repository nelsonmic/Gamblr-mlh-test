export const isValidPhoneNumber = (value: any): boolean => {
  const regex = /^(0)[78901][01]\d{8,9}$/;
  return regex.test(value);
};
