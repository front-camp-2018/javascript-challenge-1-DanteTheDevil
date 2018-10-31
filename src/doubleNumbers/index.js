/* eslint-disable-next-line */
export const doubleNum = num => {
  const arr = [...`${num}`];
  const getPart = (arr, start, end) => arr.slice(start, end).join('');
  const firstPart = getPart(arr, 0, arr.length / 2);
  const secondPart = getPart(arr, arr.length / 2);

  return firstPart === secondPart ? num : num * 2;
};
