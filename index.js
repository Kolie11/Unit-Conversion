const inputEl = document.getElementById("display-input");
const convertEl = document.getElementById("convert-el");
const formEl = document.getElementById("form-el");

const resultOne = document.getElementById("result-one");
const resultTwo = document.getElementById("result-two");
const resultThree = document.getElementById("result-three");

const meterValue = 3.281;
const literValue = 0.264;
const kiloValue = 2.204;

const myName = document.getElementById("my-name");
/*
1 meter = 3.281 feet
1 feet = 0.3048

1 liter = 0.264 gallon
1 gallon = 4.5460

1 kilogram = 2.204 pound
1 pound = 0.4535 kg
1
*/

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = inputEl.value;

  resultOne.textContent = `
  
  ${parseFloat(inputValue)} meters =
   ${(inputValue * meterValue).toFixed(3)} feet | ${parseFloat(
    inputValue
  )} feet = ${(inputValue / meterValue).toFixed(3)} meters
  
   `;

  resultTwo.textContent = `

   ${parseFloat(inputValue)} liters =
    ${(inputValue * literValue).toFixed(3)} gallons | ${parseFloat(
    inputValue
  )} gallons = ${(inputValue / literValue).toFixed(3)} liters
   
   `;

  resultThree.textContent = `

   ${parseFloat(inputValue)} kilos =
    ${(inputValue * kiloValue).toFixed(3)} pounds | ${parseFloat(
    inputValue
  )} pounds = ${(inputValue / kiloValue).toFixed(3)} kilos
   
   `;

  myName.style.display = "block";
  setTimeout(() => {
    myName.style.display = "none";
  }, 3000);
});
