const array = [3, 2, 1, 3];

const birthdayCakeCandles = (candles) => {
  if (candles.length < 1) return 0;
  if (candles.length == 1) return 1;

  let max = 0;
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) max = candles[i];
  }
  for (let i = 0; i < candles.length; i++) {
    if (max == candles[i]) count++;
  }
  return count;
};

console.log(birthdayCakeCandles(array));
