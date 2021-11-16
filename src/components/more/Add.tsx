/*
 * Imports
*/

/* Dependencies */
// Components
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

// Styles
import { Add as AddIcon } from '@mui/icons-material'

/* Locals */
// Types
import CardNames from '../../utils/types/CardNames'

/*
 * Code
*/

const cardNames: CardNames[] = ['cloud', 'date', 'humidity', 'pressure', 'sun', 'temperature', 'visibility', 'weather', 'wind']

type Props = {
  open: boolean,
  cardsLeft: CardNames[],
  cardsRight: CardNames[],
  setOpen: (open: boolean) => void,
  setCards: (cards: CardNames[]) => void,
}

export default function Add({ open, cardsLeft, cardsRight, setOpen, setCards }: Props): JSX.Element {
  const handleAddCard = (name: CardNames) => {
    setCards([name, ...cardsLeft])
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.default'
        }
      }}
    >
      <DialogTitle>Add</DialogTitle>

      <DialogContent>
        <List>
          {
            cardNames.filter(cardName => ![...cardsLeft, ...cardsRight].includes(cardName)).length === 0 ?
            <Typography>No card deleted</Typography> :
            cardNames
              .filter(cardName => ![...cardsLeft, ...cardsRight].includes(cardName))
              .map(cardName => (
                <ListItem key={cardName}>
                  <ListItemIcon>
                    <IconButton onClick={() => handleAddCard(cardName)}>
                      <AddIcon />
                    </IconButton>
                  </ListItemIcon>

                  <ListItemText primary={cardName} />
                </ListItem>
              ))
          }
        </List>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
