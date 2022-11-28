let basicsal = prompt("Enter basic")

function sal(basic) {
  let  PAYE, FringeBenefitTax, NHIF, NSSF;
  basic = document.getElementById('s').value;
  basic = basic * 15/100;
  PAYE = basic * 20/100;
  FringeBenefitTax = basic * 35/100;
  NHIF = basic * 10/100;
  NSSF = basic * 5/100;

  Net = parseInt(basic) + parseInt(PAYE) + parseInt(FringeBenefitTax) + parseInt(NHIF) + parseInt(NSSF);

  PAYE = document.getElementById('paye').value;
  FringeBenefitTax = document.getElementById('fbtax').value;
  NHIF = document.getElementById('nhif').value;
  NSSF = document.getElementById('nssf').value;
  Net = document.getElementById('net').value;
}

console.log(sal(basicsal));