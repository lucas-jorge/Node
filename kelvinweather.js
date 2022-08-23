//Current temperature in kelvin degrees
const kelvin = 0;
//converting kelvin to Celsius
const celsius = kelvin - 273;
//Convert celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounding down fahrenheit
Fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + Fahrenheit +  ' degrees fahrenheit.');
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log('The temperature is ' + Newton +  ' degrees Newton.');