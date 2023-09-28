const str = "saveChangesInTheEditor";

function camelcase(s) {
  const arrChar = [...s];
  let counter = 1;
  for (let i = 0; i < arrChar.length; i++) {
    if (arrChar[i] === arrChar[i].toUpperCase()) counter++;
  }
  return counter;
}
console.log(camelcase(str));
