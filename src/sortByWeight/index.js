/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const firstSum = 0;
  const sumNumb = elem => {
    const elemArr = [...elem];

    return elemArr.reduce((sum, current) => sum + +(current), firstSum);
  };

  return arr.sort((a, b) => sumNumb(a) - sumNumb(b));
};
