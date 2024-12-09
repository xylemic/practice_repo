function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// define a function "hasPassingGrade" that takes a student score as a param.
// function should return true if the student has a passing grade, and false if they do not
// use the getGrade function to get the student's grade... then check if the grade is passing or not

const hasPassingGrade = (score) => {
  if (getGrade(score) === "A++" || getGrade(score) === "A" || getGrade(score) === "B" || getGrade(score) === "C" || getGrade(score) === "D") {
    return true;
  } else if (getGrade(score) === "F") {
    return false;
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

const studentMsg = (totalScores, studentScore) => {
  const averageScore = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);

  // if student passed the course, the following msg:
  // Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
  // f the student failed the course, the string should follow this format:
  // Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

  return `Class average: ${averageScore}. Your grade: ${studentGrade}. ${hasPassingGrade(studentScore) ? 'You passed the course.' : 'You failed the course.'}`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
