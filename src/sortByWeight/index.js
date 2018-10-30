/* eslint-disable-next-line */
export const sortByWeight = arr => {
  arr.sort((a, b) => {
    const valueOne = [...a].reduce((sum, current) => sum + +(current), 0);
    const valueTwo = [...b].reduce((sum, current) => sum + +(current), 0);

    return valueOne > valueTwo;
  });
  return arr;
};
