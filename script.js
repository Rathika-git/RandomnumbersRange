//Generating Random Numbers between 100-150 range to find min and max numbers
//Method-1
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const minrange = 100;
const maxrange = 150;
  
const randomNumber1 = getRandomNumber(minrange, maxrange);
const randomNumber2 = getRandomNumber(minrange, maxrange);
const randomNumber3 = getRandomNumber(minrange, maxrange);
const randomNumber4 = getRandomNumber(minrange, maxrange);
const randomNumber5 = getRandomNumber(minrange, maxrange);
  
console.log(randomNumber1);
console.log(randomNumber2);
console.log(randomNumber3);
console.log(randomNumber4);
console.log(randomNumber5);


  //Used array for getting random numbers
  //Method-2
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const minRange = 100;
  const maxRange = 150;
  const numberOfRandomNumbers = 10;
  
  const randomNumbersArray = [];
  
  for (let i = 0; i < numberOfRandomNumbers; i++) {
    const randomNumber = getRandomNumber(minRange, maxRange);
    randomNumbersArray.push(randomNumber);
  }
  
  console.log(randomNumbersArray);
  
  
  
  
  
  
  