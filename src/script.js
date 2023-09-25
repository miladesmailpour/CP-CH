const array = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let minMax = Array(2).fill(0);
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    minMax[0] += arr[i];
    minMax[1] += arr[Math.abs(i - (arr.length - 1))];
  }
  console.log(`${minMax[0]} ${minMax[1]}`);
}

console.log(miniMaxSum(array));
