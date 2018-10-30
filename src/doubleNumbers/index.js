/* eslint-disable-next-line */
export const doubleNum = num => {
  const array = [...`${num}`];
  const firstPart = array.slice(0, array.length / 2).join('');
  const secondPart = array.slice(array.length / 2).join('');

  return firstPart === secondPart ? num : num * 2;
};
