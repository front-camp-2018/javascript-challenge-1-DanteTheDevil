/* eslint-disable-next-line */
export const doubleNum = num => {
  const value = [...`${num}`];
  const value_1 = value.slice(0, value.length / 2).join('');
  const value_2 = value.slice(value.length / 2).join('');

  if (value.length > 1 && value_1 === value_2) {
    return num;
  } else {
    return num * 2;
  }
};
