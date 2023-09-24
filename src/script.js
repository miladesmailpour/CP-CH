const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const aVeryBigSum = (ar) =>
  ar.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(aVeryBigSum(array));
