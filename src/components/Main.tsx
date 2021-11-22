/*
 * Imports
*/

/* Dependencies */
// Functions
import Cookies from 'universal-cookie'

// Components
import { Grid, Stack } from '@mui/material'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

/* Locals */
// Components
import Card from './Card'

// Types
import CardList from '../utils/types/CardList'
import CardNames from '../utils/types/CardNames'

/*
 * Code
*/

type Props = {
  cardsLeft: CardNames[],
  cardsList: CardList[],
  cardsRight: CardNames[],
  setCardsLeft: (cards: CardNames[]) => void,
  setCardsRight: (cards: CardNames[]) => void,
}

export default function Main({ cardsLeft, cardsList, cardsRight, setCardsLeft, setCardsRight }: Props): JSX.Element {
  const cookies = new Cookies()
  
  const onDragEnd = ({ source, destination }: DropResult) => {
    if(!destination) return

    if(source.droppableId === destination.droppableId) {
      if(source.droppableId === 'left') {
        cardsLeft.splice(destination.index, 0, cardsLeft.splice(source.index, 1)[0])

        cookies.set('cardsLeft', cardsLeft.join('|'), { path: '/' })

        return setCardsLeft(cardsLeft)
      }

      cardsRight.splice(destination.index, 0, cardsRight.splice(source.index, 1)[0])

      cookies.set('cardsRight', cardsRight.join('|'), { path: '/' })

      return setCardsRight(cardsRight)
    }

    if(source.droppableId === 'left') {
      const card = cardsLeft.splice(source.index, 1)[0]

      cardsRight.splice(destination.index, 0, card)
    } else {
      const card = cardsRight.splice(source.index, 1)[0]

      cardsLeft.splice(destination.index, 0, card)
    }

    cookies.set('cardsLeft', cardsLeft.join('|'), { path: '/' })
    cookies.set('cardsRight', cardsRight.join('|'), { path: '/' })

    setCardsLeft(cardsLeft)
    setCardsRight(cardsRight)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container>
        <Column
          dropId="left"
          cards={cardsLeft}
          cardsList={cardsList}
          setCards={setCardsLeft}
        />

        <Column
          dropId="right"
          cards={cardsRight}
          cardsList={cardsList}
          setCards={setCardsRight}
        />
      </Grid>
    </DragDropContext>
  )
}

type ColumnProps = {
  dropId: 'left' | 'right',
  cards: CardNames[],
  cardsList: CardList[],
  setCards: (cards: CardNames[]) => void,
}

function Column({ dropId, cards, cardsList, setCards }: ColumnProps): JSX.Element {
  return (
    <Grid
      item
      xs={6}
    >
      <Droppable droppableId={dropId}>
        {(provided) => (
          <Stack ref={provided.innerRef}>
            {cards.map((name: CardNames, index: number) => (
              <Card
                key={index}
                name={name}
                index={index}
                cards={cards}
                setCards={setCards}
              >
                {cardsList.find(card => card.name === name)?.component}
              </Card>
            ))}

            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </Grid>
  )
}
