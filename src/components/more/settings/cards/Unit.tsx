/*
 * Imports
*/

/* Dependencies */
// Components
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

/* Local */
// Components
import ItemPaper from '../../../ItemPaper'

// Types
import Units from '../../../../utils/types/Units'

/*
 * Code
*/

type Props = {
  unitType: Units,
  setUnitType: (unitType: Units) => void,
}

export default function Unit({ unitType, setUnitType }: Props): JSX.Element {
  const handleChange = (_: React.ChangeEvent<{}>, value: Units | null): void => {
    if (!value) return

    setUnitType(value)
  }

  return (
    <Grid item xs={6}>
      <ItemPaper>
        <Typography variant="h6">Unit</Typography>

        <ToggleButtonGroup
          value={unitType}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="imperial">Imperial</ToggleButton>
          <ToggleButton value="metric">Metric</ToggleButton>
        </ToggleButtonGroup>
      </ItemPaper>
    </Grid>
  )
}