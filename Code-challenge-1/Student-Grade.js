function publishResult() {
   const maths = document.getElementById('maths').value;
   const physics = document.getElementById('physics').value;
   const computer = document.getElementById('computer').value;
   const programming = document.getElementById('programming').value;
   const chemistry = document.getElementById('chemistry').value;
   
   let total= parseInt(maths) + parseInt(physics) + parseInt(computer) + parseInt(programming) + parseInt(chemistry);
   document.getElementById('sum').innerHTML = 'The Sum Is:' + total;

   let percentage = (total / 500) * 100;
   console.log(percentage);
   document.getElementById('percentage').innerHTML = 'The Percentage Is:' + percentage;

   
   if (percentage >= 80) {
      document.getElementById('grade').innerHTML = "You've Passed in Grade A. Excellent!";
   } else if (percentage >= 60) {
      document.getElementById('grade').innerHTML = "You've Passed in Grade B. Good!";
   } else if (percentage >= 50) {
      document.getElementById('grade').innerHTML = "You've Passed in Grade C. Satisfactory!";
   } else if (percentage >= 40) {
      document.getElementById('grade').innerHTML = "You've Passed in Grade D. Pass!";
   } 
   else {
      document.getElementById('grade').innerHTML = "You've Failed!";
   }
}