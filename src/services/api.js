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

export const addDeckAPI = async (deck) => {
  return await AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(deck))
}
