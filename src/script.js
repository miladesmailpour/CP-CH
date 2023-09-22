const simpleArraySum = (ar) => {
  const result = ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return result;
};

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));

