const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const diagonalDifference = (arr) => {
  let lr, rl;
  rl = lr = 0;
  for (let i = 0; i < arr.length; i++) {
    lr += arr[i][i];
    rl += arr[i][Math.abs(i - (arr.length - 1))];
  }

  return Math.abs(lr - rl);
};

console.log(diagonalDifference(array));
