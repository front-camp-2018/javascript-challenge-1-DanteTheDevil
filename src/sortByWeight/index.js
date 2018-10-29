/* eslint-disable-next-line */
export const sortByWeight = arr => {
  arr.sort((a, b) => {
    const value_1 = [...a].reduce((sum, current) => sum + +(current), 0);
    const value_2 = [...b].reduce((sum, current) => sum + +(current), 0);

    return value_1 > value_2;
  });
  return arr;
};
