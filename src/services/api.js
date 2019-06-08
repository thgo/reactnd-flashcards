import { AsyncStorage } from 'react-native'
import getData from './mock'

const FLASHCARDS_KEY = 'Flashcards:decks'

const setInitialData = async () => {
  const initialData = getData()
  AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(initialData))
  return initialData
}

export const getDecksAPI = async () => {
  const results = await AsyncStorage.getItem(FLASHCARDS_KEY)

  if ( !results ) {
    return setInitialData()
  }

  return JSON.parse(results)
}

export const addDeckAPI = async (deck) => 
  await AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(deck))


export const deleteDeckAPI = async (deck) => {
  return await AsyncStorage.getItem(FLASHCARDS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deck] = undefined
      delete data[deck]
      AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(data))
    })
}

export const addCardAPI = async (deckTitle, card) => {
  return await AsyncStorage.getItem(FLASHCARDS_KEY)
    .then( (results) => {
      const data = JSON.parse(results)
      let questions = data[deckTitle].questions
      questions = questions.concat(card)
      data[deckTitle].questions = questions
      console.log('After add ', data)
      AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(data))
    })
}

export const deleteCardAPI = async (deckTitle, question) => {
  return await AsyncStorage.getItem(FLASHCARDS_KEY)
    .then( (results) => {
      const data = JSON.parse(results)
      data[deckTitle].questions = data[deckTitle].questions.filter(item => item.question !== question)
      AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(data))
    })
}