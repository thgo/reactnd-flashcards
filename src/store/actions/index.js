import { getDecksAPI } from '../../services/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const DECK_DETAILS = 'DECK_DETAILS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function handleInitialData() {
  return dispatch => {
      return getDecksAPI()
        .then(decks => dispatch(receiveDecks(decks)))
  }
}

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addNewDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

// export function handleAddDeck(deckname) {
//   return dispatch => {
//     return addDeck(deckname)
//       .then(deck => dispatch(addNewDeck(deck)))
//       .catch(err => console.log('Erro no action salvar deck: ', err))
//   }
// }