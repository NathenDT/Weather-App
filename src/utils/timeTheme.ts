/*
 * Imports
*/

/* Local */
// Interfaces
import Weather from './interfaces/Weather'

/*
 * Code
*/

export default function timeTheme(weather: Weather): 'Day' | 'Night' {
  const sunrise = new Date(weather.sys.sunrise * 1000)
  const sunset = new Date(weather.sys.sunset * 1000)

  const now = new Date()

  if (now.getTime() > sunrise.getTime() && now.getTime() < sunset.getTime()) return 'Day'
  
  return 'Night'
}
