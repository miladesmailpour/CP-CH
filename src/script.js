const array_1 = [6, 3, 5];
const array_2 = [7, 3, 9];

const compareTriplets = (a, b) => {
  let result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result[0]++;
    if (b[i] > a[i]) result[1]++;
  }
  return result;
};

console.log(compareTriplets(array_1, array_2));

