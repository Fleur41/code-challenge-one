// let basicsal = document.getElementById('s').value;
// PAYE = document.getElementById('paye').value;
// FringeBenefitTax = document.getElementById('fbtax').value;
// NHIF = document.getElementById('nhif').value;
// NSSF = document.getElementById('nssf').value;
// Net = document.getElementById('net').value;

// let basicsal = prompt("Enter basic")
// function sal(basic) {
//   let PAYE, FringeBenefitTax, NHIF, NSSF;
//   let basic1 = basic * 15/100;
//   PAYE = basic * 20/100;
//   FringeBenefitTax = basic1 * 35/100;
//   NHIF = basic1 * 10/100;
//   NSSF = basic1 * 5/100;

//   Net = parseInt(basic1) + parseInt(PAYE) + parseInt(FringeBenefitTax) + parseInt(NHIF) + parseInt(NSSF);

//   // PAYE = document.getElementById('paye').value;
//   // FringeBenefitTax = document.getElementById('fbtax').value;
//   // NHIF = document.getElementById('nhif').value;
//   // NSSF = document.getElementById('nssf').value;
//   // Net = document.getElementById('net').value;
//   return PAYE + NHIF
// }


// console.log(sal(parseInt(basicsal)))
// console.log(prt());



let basicsal = prompt("Enter basic")
let Paye;
let NHIF=300

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

calculatePaye(parseInt(basicsal))

function calculateNhif() {
  
}

let totalDeductions = Paye + NHIF
let netPay = parseInt(basicsal) - totalDeductions

console.log(netPay);