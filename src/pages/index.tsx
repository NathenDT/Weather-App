/*
 * Imports
*/

/* Dependencies */
// Functions
import { useState } from 'react'

// Components
import { Alert, Grid, Stack } from '@mui/material'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

/* Local */
// Functions
import getCardList from '../utils/getCardList'

// Components
import Card from '../components/Card'
import Footer from '../components/Footer'
import More from '../components/more/Index'
import Title from '../components/Title'

// Types
import CardList from '../utils/types/CardList'
import CardNames from '../utils/types/CardNames'
import TemperatureUnit from '../utils/types/TemperatureUnits'
import ThemeTypes from '../utils/types/ThemeTypes'
import Weather from '../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
  currentDate: Date,
  temperatureUnits: TemperatureUnit,
  themeType: ThemeTypes,
  error: string,
  setThemeType: (themeType: ThemeTypes) => void,
  setTempType: (tempType: TemperatureUnit) => void,
}

export default function Index({
  loading,
  weather,
  currentDate,
  temperatureUnits,
  themeType,
  error,
  setThemeType,
  setTempType,
}: Props): JSX.Element {
  const
    [cardsLeft, setCardsLeft] = useState<CardNames[]>(['weather', 'sun', 'cloud', 'humidity']),
    [cardsRight, setCardsRight] = useState<CardNames[]>(['temperature', 'date', 'wind', 'visibility', 'pressure'])

  const cardsList: CardList[] = getCardList(loading, weather, currentDate, temperatureUnits)

  const onDragEnd = ({ source, destination }: DropResult) => {
    if(!destination) return

    if(source.droppableId === destination.droppableId) {
      if(source.droppableId === 'left') {
        cardsLeft.splice(destination.index, 0, cardsLeft.splice(source.index, 1)[0])

        return setCardsLeft(cardsLeft)
      }

      cardsRight.splice(destination.index, 0, cardsRight.splice(source.index, 1)[0])

      return setCardsRight(cardsRight)
    }

    if(source.droppableId === 'left') {
      const card = cardsLeft.splice(source.index, 1)[0]

      cardsRight.splice(destination.index, 0, card)
    } else {
      const card = cardsRight.splice(source.index, 1)[0]

      cardsLeft.splice(destination.index, 0, card)
    }

    setCardsLeft(cardsLeft)
    setCardsRight(cardsRight)
  }
  
  return (
    <>
      {error === '' || <Alert severity = "error">{error}</Alert>}

      <Title
        loading={loading}
        weather={weather}
      />

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

      <Footer />

      <More
        cardLeft={cardsLeft}
        cardRight={cardsRight}
        temperatureUnit={temperatureUnits}
        themeType={themeType}
        setCards={setCardsLeft}
        setTempType={setTempType}
        setThemeType={setThemeType}
      />
    </>
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
        {(provided, snapshot) => (
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
