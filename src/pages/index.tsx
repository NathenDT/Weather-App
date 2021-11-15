/*
 * Imports
*/

/* Dependencies */
// Functions
import { useDrag } from 'react-dnd'

// Components
import { Alert, Grid, Stack } from '@mui/material'

/* Local */
// Components
import Footer from '../components/Footer'
import Settings from '../components/settings/Index'
import Title from '../components/Title'
// - Cards
import CloudCard from '../components/cards/Cloud'
import DateCard from '../components/cards/Date'
import HumidityCard from '../components/cards/Humidity'
import PressureCard from '../components/cards/Pressure'
import SunCard from '../components/cards/Sun'
import TemperatureCard from '../components/cards/Temperature'
import VisiblityCard from '../components/cards/Visibility'
import WeatherCard from '../components/cards/Weather'
import WindCard from '../components/cards/Wind'

// Interfaces
import Weather from '../utils/interfaces/Weather'

// Types
import TemperatureUnit from '../utils/types/TemperatureUnits'
import ThemeTypes from '../utils/types/ThemeTypes'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
  currentDate: Date,
  tempType: TemperatureUnit,
  themeType: ThemeTypes,
  error: string,
  setThemeType: (themeType: ThemeTypes) => void,
  setTempType: (tempType: TemperatureUnit) => void,
}

export default function Index({
  loading,
  weather,
  currentDate,
  tempType,
  themeType,
  error,
  setThemeType,
  setTempType,
}: Props): JSX.Element {

  const cards = [
    [
      <WeatherCard
        loading={loading}
        weather={weather}
      />,
      <WindCard
        loading={loading}
        weather={weather}
      />,
      <CloudCard
        loading={loading}
        weather={weather}
      />,
      <HumidityCard
        loading={loading}
        weather={weather}
      />,
      <PressureCard
        loading={loading}
        weather={weather}
      />,
      <SunCard
        loading={loading}
        weather={weather}
      />,
      <VisiblityCard
        loading={loading}
        weather={weather}
      />,
    ],
    [
      <TemperatureCard
        loading={loading}
        weather={weather}
        tempType={tempType}
      />,
      <DateCard
        currentDate={currentDate}
      />
    ]
  ]
  
  return (
    <>
      {error === '' || <Alert severity = "error">{error}</Alert>}

      <Title
        loading={loading}
        weather={weather}
      />

      <Grid container>
        <Column>
          {cards[0]}
        </Column>

        <Column>
          {cards[1]}
        </Column>
      </Grid>        

      <Footer />

      <Settings
        tempType={tempType}
        themeType={themeType}
        setTempType={setTempType}
        setThemeType={setThemeType}
      />
    </>
  )
}

type ColumnProps = {
  children: any
}

function Column({ children }: ColumnProps): JSX.Element {
  return (
    <Grid
      item
      xs={6}
    >
      <Stack>
        {children}
      </Stack>
    </Grid>
  )
}
