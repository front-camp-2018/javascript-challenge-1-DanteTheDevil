/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const firstSum = 0;
  const sumOfNumb = elem => [...elem].reduce((sum, current) => sum + +(current), firstSum);

  arr.sort((a, b) => {
    const valueOne = sumOfNumb(a);
    const valueTwo = sumOfNumb(b);

    return valueOne - valueTwo;
  });
  return arr;
};
