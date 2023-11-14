const numberOfStudents = +prompt("Please Enter Number of Students you want to enter their grade:")
let studentGrade;
let gradesSum = 0;
let finalAnswer;

if (isNaN(numberOfStudents) || (numberOfStudents <= 0)) {
    alert("Please Enter a correct number!")
} else {
    for (let i = 0; i < numberOfStudents; i++) {
        studentGrade = +prompt("please enter the grade of student:")
        if (isNaN(studentGrade) || (studentGrade < 0)) {
            alert('Please enter a correct amount of number!')
            i--
        } else {
            gradesSum += studentGrade
        }
    }

    finalAnswer = gradesSum / numberOfStudents
    
    alert(`avg grage is: ${finalAnswer}`)
}
