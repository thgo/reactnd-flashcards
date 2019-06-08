import {
  RECEIVE_DECKS,
  ADD_CARD,
  DELETE_DECK,
  ADD_DECK,
  DELETE_CARD,
} from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case DELETE_DECK:
      const newState = state
      delete newState[action.deck.title]
      return {
        ...newState
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          questions: [
            ...state[action.deckTitle].questions,
            action.card
          ]
        }
      }
    case DELETE_CARD:
      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          questions: state[action.deckTitle].questions
            .filter(q => q.question !== action.question),
        }
      }
    default:
      return state
  }
}
