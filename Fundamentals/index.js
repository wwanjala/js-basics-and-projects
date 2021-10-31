'use strict';

const x = 20;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
//calculate max value from array
const temperatures = [2, 6, 34, 98, 9, 76, 23, 'error'];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.lenght; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //fixing bug
    // value: Number(prompt('Degrees celsius')),
  };
  // console.warn(measurement.value);
  // console.error(measurement.value);
  //prompt function always returns a string
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//challenge
//understand the problem
//--array transformed to string separated by 3 dots
//-- what is the x days? index + 1

//break into sub-problems
// - transform array into string
// - transfor each element to string with degrees
// - string needs to contain day (index + 1)
// - Add ...cbetween elements and start and end of string
// -  log string to console
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.lenght; i++) {
    str = str + ` ${arr[i]}`;
  }
  console.log(str);
};
printForecast(data1);
