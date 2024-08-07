/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

/*************************************/
// function logger(array) {
//   array.forEach((element) => {
//     console.log(element);
//   });
// }

const logger = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

logger([1, 2, 3, 4, 5]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const toCelsius = (temperatures) => {
  let tempCes = temperatures.map((F) => {
    return (F - 32) * (5 / 9);
  });
  return tempCes;
};
console.log(toCelsius([30, 20, 0]));

// /**************************************
//  * hottestDays(temperatures, threshhold)
//  *
//  * - Accepts an array of temperatures
//  * - Accepts a threshhold temperature
//  * - Returns an array of temperatures
//  *   that exceed the threshhold
//  ***************************************/
const hottestDays = (temperatures, threshhold) => {
  return temperatures.filter((temp) => {
    if (temp > threshhold) {
      return true;
    } else {
      return false;
    }
  });
};
console.log(hottestDays([30, 20, 0], 15));

// /******************************************
//  * logHottestDays(temperatures, threshhold)
//  *
//  * - Accepts an array of temperatures
//  *   IN DEGREES FAHRENHEINT
//  * - Accepts a threshhold temperature
//  *   IN DEGREES FAHRENHEINT
//  * - Logs temperatures that exceed the
//  *   threshhold to the console
//  *   IN DEGREES CELSIUS
//  *
//  * hint: you can combine
//  *       all previous functions
//  *******************************************/
const logHottestDays = (temperatures, threshhold) => {
  let threholdtemp = hottestDays(temperatures, threshhold);
  let tempCelcus = toCelsius(temperatures);
  logger(tempCelcus);
};
logHottestDays([30, 20, 0], 15);
