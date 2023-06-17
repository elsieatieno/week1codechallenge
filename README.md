# week1codechallenge

## Author
-[Elsie Atieno](https://github.com/elsieatieno)

## Objectives
- Create a student grade generator that outputs grades of a certain criteria
- Create a speed detector that gives output when speed is input
- Create a net salary calculator that outputs calculated payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

## Introduction
For this challenge, I was tasked with doing three challenges. The first was to create a student grade
calculator and the second one was to make a speed detector that gives output after a certain speed is entered
lastly the final one was to create a net salary calculator that calculates someone's net salary.

## grade.js
In this Student grade generator, I made two functions, one of them was for `studentName` and the other was for `gradeGenerator`. 
    function studentName(name){
    return name;
    }

The function is named `studentName` and it takes the parameter `name` and it returns the name when called. So when the function is called the output is the name. For example:
 studentName("Yukio");
 => The output is Yukio since that was the argument when the function was called.

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

The function is named `gradeCalculator` and it takes the parameter `marks` and it uses the if functions. The 
if function have the conditions that check the marks and returns the grade that fits the criteria the belong
to. For example:
 gradeCalculator(20);
 => The output is E since that was the argument passed and 20 falls in the less than 40 marks which returns E.


 ## speed_detector.js
In this speed_detector.js, I declared two functions and declared two constants.The two functions were the `speedDetector` and the `calculateDemerit`.The two constants were `speedLimit` and `pointsPerDemerit`. 

const speedLimit = 70;
const pointsPerDemerit = 1;
The two constants have been declared to show that the speedLimit is 70 and the pointsPerDemerit is 1. Declaring
them as constants means that they cant be any other values than the one declared.

function speedDetector(speed){
    if (speed < 70){
        return "OK";
    } else {
      return calculateDemerit();
    }
}
The function speedDetector takes the `speed` as parameter and it uses an if function whereby the first condition is if the speed is less than speedLimit, it returns okay but `if its higher, it calls the other function which is calculateDemerit`.

function calculateDemerit(speed){
  if (speed > speedLimit){
   // For calculating points
    const points = Math.floor((speed - speedLimit) / 5) * pointsPerDemerit;
    return points;
 } else if(points === 12){
    return "License Suspended";
 }
}
The function calculateDemerit takes the `speed` as a parameter and it checks if the speed is less than the speedLimit, it returns nothing else if the speed is greater, it calculates points. The formula for calculating points has been made a constant where but it takes `speed - speedLimit and it is divided by 5 the answer is round down and it multiplies by pointsPerDemerit and it returns points`. The last else if is when points are `equal to 12 it returns License Suspended`.

calculateDemerit(80);
=> The output will be 2 points due to the argument being passed when the function is called
speedDetector(20);
=> The output will return OK due to the argument being passed when the function is called

## net_salary.js
In this net_salary calculator, there are four functions and five constants declared. The functions are `grossSalary`, `calculateIncomeTax`, `calculateNSSF` and `calculateNHIF`. The constants declared are `relief`, `payee`,`nssf`, `nhif` and `netSalary`. 

function grossSalary(salary, benefits){
    return salary + benefits;
}
The first function is named grossSalary which takes two parameters `salary` and `benefits` and it returns and out put of calculation grossSalary which is adding the salary and the benefits.

function calculateIncomeTax(taxPayable, rate){
    if(taxPayable < 288_000){
    return taxPayable * rate;
 } else if (taxPayable > 288_000  && taxPayable <  388_000){
    return taxPayable * rate;
 } else {
    return taxPayable * rate;
 }
 
}
The second function is named calculateIncomeTax which takes two parameters `rate` and `taxPayable` and it has if functions which check the annual taxPayable amount and places it in a certain criteria and then if find it it returns the incomeTax which is gotten by `taxPayable * rate`.

function calculateNSSF(pension){
 if(pension < 6_000){
    return "Tier 1";
 } else if(pension > 6_000 && pension < 18_000){
    return "Tier 2";
 }
}
The third function is calculateNSSF which takes the parameter `pension`. It used if to check whether the pension lies within a certain criteria and returns where it belongs.

function calculateNHIF(salary){
 if(salary < 5_999){
    return 150;
 } else if (salary > 6_000 && salary < 7_999){
    return 300;
 } else if (salary > 8_000 && salary < 11_999){
    return 400;
 } else if (salary > 12_000 && salary < 14_999){
    return 500;
 } else if (salary > 15_000 && salary < 19_999){
    return 600;
 } else if (salary > 20_000 && salary < 24_999){
    return 750;
 } else if (salary > 25_000 && salary < 29_999){
    return 850;
 } else if (salary > 30_000 && salary < 34_999){
    return 900;
 } else if (salary > 35_000 && salary < 39_999){
    return 850;
 } else if (salary > 40_000 && salary < 44_999){
    return 1_000;
 } else if (salary > 45_000 && salary < 49_999){
    return 1_100;
 } else if (salary > 50_000 && salary < 59_999){
    return 1_200;
 } else if (salary > 60_000 && salary < 69_999){
    return 1_300;
 } else if (salary > 70_000 && salary < 79_999){
    return 1_400;
 } else if (salary > 80_000 && salary < 89_999){
    return 1_500;
 } else if (salary > 90_000 && salary < 99_999){
    return 1_600;
 } else {
    return 1_700;
 }
} 
The last function is calculateNHIF which passes the parameter `salary`. The function uses if to determine the criteria which salary belongs to and returns the amount of money that is put into the NHIF funding.

calculateNHIF(64_000);
=> it returns 1_300 because the argument falls in between the (> 60_000 && < 69_000) when the salary was called.
calculateNSSF(4_000);
=> it returns "Tier 1" because the argument is <6_000
calculateIncomeTax(260_000);
=> it returns 26_000 because it took the argument multiplied by rate which was 10%
glossSalary(50_000, 4_000);
=> it returns 54_000 because to calculate grossSalary was adding the two arguments
When the four functions are called, the outputs will be generated based on what the functions require of them.

const relief = 28_800;
const payee = calculateIncomeTax(taxPayable, rate)- relief;
The relief was declared as constant meaning that it is only that value. The payee as constant because the way of calculating payee was defines as getting the `incomeTax - relief`. The incomeTax will be called as since it was declared as a function.

const nssf = calculateNSSF(salary);
const nhif = calculateNHIF(salary);
const netSalary = grossSalary(salary,benefits) - (payee + nhif+ nssf);
THe nssf constant points to the function calculateNSSF, the nhif constant points to the function calculateNHIF and the netSalary is declared because to calculate it the `payee, nhif, nssf`are added and subtracted from g`rossSalary`.

## Conclusion
In this weekly-challenge, I've covered the basics of my lessons for the whole week.
Using functions, declaring constants and using if to do the three challenges.