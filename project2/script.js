function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const result = document.getElementById("result");

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    result.innerText = "⚠️ Please enter valid values!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
//   let message = "";

  if (bmi < 18.5) {
    message = `Your BMI is ${bmi} → Underweight `;
    result.style.color = "#ffa7f3ff";
  } else if (bmi < 24.9) {
    message = `Your BMI is ${bmi} → Normal `;
    result.style.color = "#0d1815ff";
  } else if (bmi < 29.9) {
    message = `Your BMI is ${bmi} → Overweight `;
    result.style.color = "#fdcb6e";
  } else {
    message = `Your BMI is ${bmi} → Obese `;
    result.style.color = "#ff7675";
  }

  result.innerText = message;
}
