/*
 * Imports
*/

/* Local */
// Interfaces
import Weather from './interfaces/Weather'

/*
 * Code
*/

export default function timeTheme(weather: Weather, currentDate: Date): 'Day' | 'Night' {
  const sunrise = new Date(weather.sys.sunrise * 1000)
  const sunset = new Date(weather.sys.sunset * 1000)

  if (currentDate.getTime() > sunrise.getTime() && currentDate.getTime() < sunset.getTime()) return 'Day'
  
  return 'Night'
}
