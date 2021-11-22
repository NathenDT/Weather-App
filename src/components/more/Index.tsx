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
import ThemeTypes from '../../utils/types/ThemeTypes'
import Units from '../../utils/types/Units'

/*
 * Code
*/

type Props = {
  cardLeft: CardNames[],
  cardRight: CardNames[],
  themeType: ThemeTypes,
  unitType: Units,
  setCards: (cards: CardNames[]) => void,
  setThemeType: (themeType: ThemeTypes) => void,
  setUnitType: (unitType: Units) => void,
}

export default function More({
  cardLeft,
  cardRight,
  themeType,
  unitType,
  setCards,
  setThemeType,
  setUnitType
}: Props): JSX.Element {
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
        themeType={themeType}
        unitType={unitType}
        setOpen={setSettingsOpen}
        setThemeType={setThemeType}
        setUnitType={setUnitType}
      />
    </>
  )
}
