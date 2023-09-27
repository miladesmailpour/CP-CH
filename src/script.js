const apples = [-2, 2, 1];
const oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // s < a + d < t
  console.log(fruitPicker(s, t, a, apples));
  console.log(fruitPicker(s, t, b, oranges));
}
const fruitPicker = (startLand, endLand, tree, fruit) => {
  let distance, fruitCount;
  distance = fruitCount = 0;
  for (let i = 0; i < fruit.length; i++) {
    distance = tree + fruit[i];
    if (distance >= startLand && distance <= endLand) fruitCount++;
  }
  return fruitCount;
};

console.log(countApplesAndOranges(7, 11, 5, 15, apples, oranges));
