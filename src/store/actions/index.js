import { getDecksAPI } from '../../services/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const DECK_DETAILS = 'DECK_DETAILS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_CARD = 'DELETE_CARD'

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

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck,
  }
}

export function addNewCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  }
}

export function deleteCard(deckTitle, question) {
  return {
    type: DELETE_CARD,
    deckTitle,
    question,
  }
}