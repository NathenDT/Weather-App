/*
 * Imports
*/

/* Local */
// Components
import CloudCard from '../components/cards/Cloud'
import DateCard from '../components/cards/Date'
import HumidityCard from '../components/cards/Humidity'
import PressureCard from '../components/cards/Pressure'
import SunCard from '../components/cards/Sun'
import TemperatureCard from '../components/cards/Temperature'
import VisibilityCard from '../components/cards/Visibility'
import WeatherCard from '../components/cards/Weather'
import WindCard from '../components/cards/Wind'

// Types
import CardList from './types/CardList'
import Units from './types/Units'
import Weather from './types/Weather'

/*
 * Code
*/

export default function getCardList(
  loading: boolean,
  weather: Weather,
  currentDate: Date,
  unitType: Units,
): CardList[] {
  return [
    {
      name: 'cloud',
      component: CloudCard({ loading, weather }),
    },
    {
      name: 'date',
      component: DateCard({ currentDate }), 
    },
    {
      name: 'humidity',
      component: HumidityCard({ loading, weather }),
    },
    {
      name: 'pressure',
      component: PressureCard({ loading, unitType, weather }),
    },
    {
      name: 'sun',
      component: SunCard({ loading, weather }),
    },
    {
      name: 'temperature',
      component: TemperatureCard({ loading, unitType, weather }),
    },
    {
      name: 'visibility',
      component: VisibilityCard({ loading, weather }),
    },
    {
      name: 'weather',
      component: WeatherCard({ loading, weather }),
    },
    {
      name: 'wind',
      component: WindCard({ loading, unitType, weather }),
    },
  ]
}
