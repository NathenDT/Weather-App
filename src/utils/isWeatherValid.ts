/*
 * Imports
*/

/* Local */
// Functions
import Weather from './interfaces/Weather'

/*
 * Code
*/

export default function isWeatherValid(weather: Weather): boolean {
  return weather.cod === 200
}
