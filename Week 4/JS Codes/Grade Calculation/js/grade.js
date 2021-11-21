/* Grade Calculation Function */
const calculateGrade = () => {
  let obtMarks = parseInt(document.getElementById('obtMarks').value);
  let grade = '';

  /* Exception Handling */
  if (obtMarks > 1100 || obtMarks < 0) {
    alert('Esa na karey please');
    return;
  }

  percentage = (obtMarks / 1100) * 100; /* Calc % */

  /* Call checkGrade func*/
  grade = checkGrade(percentage);

  document.getElementById('grade').innerHTML = grade;

  return false;
};

//Check Grade Function
const checkGrade = (percentage) => {
  if (percentage < 70) return 'F';
  if (percentage >= 70 && percentage < 80) return 'C';
  if (percentage >= 80 && percentage < 90) return 'B';
  if (percentage >= 90) return 'A';
};
