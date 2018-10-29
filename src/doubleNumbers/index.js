/* eslint-disable-next-line */
export const doubleNum = num => {
  const array = [...`${num}`];
  const value_1 = array.slice(0, array.length / 2).join('');
  const value_2 = array.slice(array.length / 2).join('');

  return value_1 === value_2 ? num : num * 2;
};
