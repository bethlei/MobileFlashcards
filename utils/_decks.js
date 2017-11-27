import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'flashcards:decks'

export function formatDecks(results) {
  console.log('results', results)
  if (results === null) {
    return setDummyData()
  }
  return JSON.parse(results)
}

function setDummyData() {
  const dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}
