import {
  GET_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
} from './../actions/types'

const initialState = {
  decks
}

function decks(state=initialState.decks, action) {
  switch(action.type) {
    case GET_DECKS:
      return action.decks

    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }

    case ADD_CARD_TO_DECK:
      return action.deck

    default:
      return state
  }
}

export default decks
