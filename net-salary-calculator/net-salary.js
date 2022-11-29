


let basicSal = prompt("Enter basic")
let Paye;
let Nhif;
let Nssf;


function calculatePaye(basic){
  if(basic<=24000){
    Paye=basic * 0.1
    return Paye
  } else if (basic >=24001 && basic <= 32333) {
    Paye=basic * 0.25
  } else { 
    Paye = basic * 0.3
  }
}

calculatePaye(parseInt(basicSal));

function calculateNhif(basic) {
  if (basic <= 5999) {
    return 150;
  } else if (basic <= 6000 && basic >= 7999) {
    return 300;
  } else if (basic <= 8000 && basic >= 11999) {
    return 400;
  } else if (basic <= 12000 && basic >= 14999) {
    return 500;
  } else if (basic <= 15000 && basic >= 19999) {
    return 600;
  } else if (basic <= 20000 && basic >= 24999) {
    return 750;
  } else if (basic <= 25000 && basic >= 29999) {
    return 850;
  } else if (basic <= 30000 && basic >= 34999) {
    return 900;
  } else if (basic <= 35000 && basic >= 39999) {
    return 950;
  } else if (basic <= 40000 && basic >= 44999) {
    return 1000;
  } else if (basic <= 45000 && basic >= 49999) {
    return 1100;
  } else if (basic <= 50000 && basic >= 59999) {
    return 1200;
  } else if (basic <= 60000 && basic >= 69999) {
    return 1300;
  } else if (basic <= 70000 && basic >= 79999) {
    return 1400;
  } else if (basic <= 80000 && basic >= 89999) {
    return 1500;
  } else if (basic <= 90000 && basic >= 99999) {
    return 1600;
  } else {
    return 1700;
  }
} 
calculateNhif(parseInt(basicSal));

function calculateNssf(basic) {
  Nssf = basic * 0.06
}
calculateNssf(parseInt(basicSal));


let totalDeductions = parseInt(Paye) + parseInt(Nhif) + parseInt(Nssf);
let netPay = parseInt(basicSal - totalDeductions);
console.log(netPay);