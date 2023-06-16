// For the student name
function studentName(name){
    return name;
}

// for calculating the grade
function gradeCalculator(marks){
    if(marks > 79){
        return "A";
    } else if(marks > 60 && marks < 79){
        return "B";
    } else if(marks > 59 && marks < 49){
        return "C";
    } else if(marks > 40 && marks < 49){
        return "D";
    } else{
        return "E";
    }
}

// calling function to get output
studentName("Yukio");
gradeCalculator(80);