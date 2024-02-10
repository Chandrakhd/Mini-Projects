const tempResult = document.getElementById("tempResult");
const tempType = document.getElementById("temp_type");
const tempInput = document.getElementById("tempInput");
const calculateBtn = document.getElementById("calculateBtn");
const currentTime = document.querySelector(".currentTime");
const currentDate = document.querySelector(".currentDate");
const currentDay = document.querySelector(".day");

const date = new Date();
const options = { weekday: "long" };
const dayName = date.toLocaleDateString(undefined, options);

const currDate = date.toLocaleDateString();
currentDate.innerHTML = currDate ?? "Not available";
currentDay.innerHTML = dayName ?? "Not available";

setInterval(() => {
  const date2 = new Date();
  const currTime = date2.toLocaleTimeString();
  currentTime.innerHTML = currTime;
}, 1000);

function celsiusToFah(celsius) {
  return (celsius * 9) / 5 + 32;
}
function fahrenheitToCel(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function UserInputSelect() {
  let userDegreeInput = parseFloat(tempInput.value);
  let error = document.querySelector(".error");
  error.innerHTML = "";
  console.log(error);
  if (isNaN(userDegreeInput)) {
    error.innerHTML = "Please Enter the temperature to calculate?";
  } else if (tempType.value === "fahrenheit") {
    let fahrenheit = celsiusToFah(userDegreeInput);
    tempResult.textContent = `${fahrenheit.toFixed(2)} °F`;
  } else if (tempType.value === "celsius") {
    let celsius = fahrenheitToCel(userDegreeInput);
    tempResult.textContent = `${celsius.toFixed(2)}°C`;
  }
}
calculateBtn.addEventListener("click", function () {
  UserInputSelect();
});
