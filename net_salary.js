function grossSalary(salary, benefits){
    return salary + benefits;
}

function calculateIncomeTax(taxPayable, rate){
    if(taxPayable < 288_000){
    return taxPayable * rate;
 } else if (taxPayable > 288_000  && taxPayable <  388_000){
    return taxPayable * rate;
 } else {
    return taxPayable * rate;
 }
 
}
const relief = 28_800;
const payee = calculateIncomeTax - relief;
console.log(payee);

function calculateNSSF(pension){
 if(pension < 6_000){
    return "Tier 1";
 } else if(pension > 6_000 && pension < 18_000){
    return "Tier 2";
 }
}
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

const netSalary = grossSalary - (payee + calculateNHIF + calculateNHIF);
