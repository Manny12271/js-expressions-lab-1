// Temperatures for each day
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Temperature Data
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

// Convert Celsius to Fahrenheit
const celsiusTempsToFahrenheit = celsiusTemps.map(temp => (temp * 9 / 5) + 32);

// Combine the Fahrenheit and Celsius temperatures
const allTempsInFahrenheit = fahrenheitTemps.concat(celsiusTempsToFahrenheit);

// Calculate the total temperature in Fahrenheit
const tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);

// Convert the total temperature in Fahrenheit to Celsius
const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32) * 5 / 9;

// Calculate the mean temperature in Celsius and Fahrenheit
const avg_temperature_in_celsius = tot_temperature_in_celsius / allTempsInFahrenheit.length;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allTempsInFahrenheit.length;

// Debug Outputs
console.log("All temps in Celsius (should be 30):", allTempsInFahrenheit.length);
console.log("Raw Total Temp in Celsius:", tot_temperature_in_celsius);
console.log("Raw Average Temp in Celsius:", avg_temperature_in_celsius);
console.log("Raw Total Temp in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Raw Average Temp in Fahrenheit:", avg_temperature_in_fahrenheit);

// Final Outputs (formatted)
console.log("Total Temp in Celsius:", tot_temperature_in_celsius.toFixed(3));
console.log("Average Temp in Celsius:", avg_temperature_in_celsius.toFixed(3));
console.log("Total Temp in Fahrenheit:", tot_temperature_in_fahrenheit.toFixed(3));
console.log("Average Temp in Fahrenheit:", avg_temperature_in_fahrenheit.toFixed(3));
