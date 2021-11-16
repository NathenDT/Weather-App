/*
 * Imports
*/

/* Dependencies */
// Functions
import { useState } from 'react'

// Components
import { SpeedDial, SpeedDialAction } from '@mui/material'

// Styles
import { Add as AddIcon, MoreVert, Settings as SettingsIcon } from '@mui/icons-material'

/* Locals */
// Components
import Add from './Add'
import Settings from './settings/Index'

// Types
import CardNames from '../../utils/types/CardNames'
import TemperatureUnits from '../../utils/types/TemperatureUnits'
import ThemeTypes from '../../utils/types/ThemeTypes'

/*
 * Code
*/

type Props = {
  cardLeft: CardNames[],
  cardRight: CardNames[],
  temperatureUnit: TemperatureUnits,
  themeType: ThemeTypes,
  setCards: (cards: CardNames[]) => void,
  setTempType: (tempType: TemperatureUnits) => void,
  setThemeType: (themeType: ThemeTypes) => void
}

export default function More({ cardLeft, cardRight, temperatureUnit, themeType, setCards, setTempType, setThemeType }: Props): JSX.Element {
  const
    [addOpen, setAddOpen] = useState<boolean>(false),
    [settingsOpen, setSettingsOpen] = useState<boolean>(false)

  const actions = [
    { icon: <AddIcon />, name: 'Add', handleOpen: () => setAddOpen(true) },
    { icon: <SettingsIcon />, name: 'Settings', handleOpen: () => setSettingsOpen(true) }
  ]

  return (
    <>
      <SpeedDial
        ariaLabel="More"
        style={{
          position: 'fixed',
          bottom: '20px', 
          right: '20px',
        }}
        icon={<MoreVert />}
      >
        {actions.map(({ icon, name, handleOpen }) => (
          <SpeedDialAction
            key={name}
            icon={icon}
            tooltipTitle={name}
            onClick={handleOpen}
          />
        ))}
      </SpeedDial>

      <Add
        open={addOpen}
        cardsLeft={cardLeft}
        cardsRight={cardRight}
        setOpen={setAddOpen}
        setCards={setCards}
      />

      <Settings
        open={settingsOpen}
        tempType={temperatureUnit}
        themeType={themeType}
        setOpen={setSettingsOpen}
        setTempType={setTempType}
        setThemeType={setThemeType}
      />
    </>
  )
}
