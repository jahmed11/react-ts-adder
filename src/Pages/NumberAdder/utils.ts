/** Check if the input is a string numbers and not alphabets */
export const isValidNumber = (inputValue: string): boolean => {
  return /^-?\d*\.?\d*-?$/.test(inputValue);
};
