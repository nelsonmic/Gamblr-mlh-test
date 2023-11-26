export const generateInitials = (fullName: string) => {
  const words = fullName.split(' ');
  const abbreviations = words.map((word) => word.charAt(0).toUpperCase());
  const initials  = abbreviations.join('').slice(0, 2);

  return initials;
}