// 1
function kelvinToFahrenheit (kelvin) {
  const fahrenheit = (kelvin - 273) * (9/5) + 32;
  return fahrenheit;
};

const fahrenheit = kelvinToFahrenheit (10);
console.log(fahrenheit);