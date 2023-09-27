const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  return grades.map((grade) => {
    const roundBase = 5;
    if (grade < 38) return grade;
    if (grade == 100) return grade;
    const reminder = grade % 10;
    if (reminder >= roundBase) {
      return roundGrade(grade, reminder, roundBase * 2);
    } else {
      return roundGrade(grade, reminder, roundBase);
    }
  });
}
const roundGrade = (grade, reminder, base5) => {
  const maxDiff = 3;
  const base10 = 10;
  if (base5 - reminder < maxDiff) {
    return Math.floor((grade / base10) % base10) * base10 + base5;
  } else return grade;
};

console.log(gradingStudents(grades));
