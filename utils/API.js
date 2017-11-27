import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, formatDecks } from './_decks'

export function fetchDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDecks)
}

export function submitEntry(deck) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}
