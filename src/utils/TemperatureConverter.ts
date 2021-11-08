/*
 * Imports
*/

/* Dependencies */
// Types
import TemperatureUnits from './types/TemperatureUnits'

/*
 * Code
*/

export default function TemperatureConverter(temperature: number, fromUnit: TemperatureUnits, toUnit: TemperatureUnits): number {
  if (fromUnit === toUnit) return temperature

  if(toUnit === 'F') return covertToFarhenheit(temperature, fromUnit)

  if(toUnit === 'C') return convertToCelsius(temperature, fromUnit)

  if(toUnit === 'K') return convertToKelvin(temperature, fromUnit)

  return 0
}

function covertToFarhenheit(_temperature: number, fromUnit: TemperatureUnits): number {
  let temperature = 0
  
  if(fromUnit === 'C') temperature = (_temperature * 9 / 5) + 32
  
  if(fromUnit === 'K') temperature = (_temperature - 273.15) * 9 / 5 + 32

  return Math.round(temperature * 100) / 100
}

function convertToCelsius(_temperature: number, fromUnit: TemperatureUnits): number {
  let temperature = 0

  if(fromUnit === 'F') temperature = (_temperature - 32) * 5 / 9

  if(fromUnit === 'K') temperature = _temperature - 273.15

  return Math.round(temperature * 100) / 100
}

function convertToKelvin(_temperature: number, fromUnit: TemperatureUnits): number {
  let temperature = 0

  if(fromUnit === 'F') temperature = (_temperature - 32) * 5 / 9 + 273.15

  if(fromUnit === 'C') temperature = _temperature + 273.15

  return Math.round(temperature * 100) / 100
}
