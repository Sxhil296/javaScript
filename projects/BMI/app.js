document.addEventListener("DOMContentLoaded", function () {
  const bmiForm = document.querySelector("#bmi-form");
  const weightInput = document.querySelector("#weight");
  const heightInput = document.querySelector("#height");
  const resultDiv = document.querySelector("#result");

  bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)/100
    const bmi = calculateBMI(weight, height)
    const bmiCategory = getBMICategory(bmi)
    resultDiv.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong>. This is considered <strong>${bmiCategory}</strong>.`
  });

  function calculateBMI(weight, height){
    return weight / (height*height)
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
  }


});
