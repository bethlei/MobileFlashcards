import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from './TextButton'
import { darkGray } from '../utils/colors'

const QuizScore = (props) => {
  restartQuiz = (deck) => {
    const { title } = props.navigation.state.params
    props.navigation.navigate(
      'Quiz',
      { title }
    )
  }

  backToDeck = (deck) => {
    const { title } = props.navigation.state.params
    props.navigation.navigate(
      'Deck',
      { title }
    )
  }

  const { deck, title, totalCorrectAnswers, totalQuestions } = props.navigation.state.params

  return (
    <View>
      <Text style={styles.correctAnswerScore}>You answered {totalCorrectAnswers} out of { totalQuestions } { totalQuestions > 1 ? `questions` : `question` } correctly on the { title } deck</Text>
      <TextButton onPress={restartQuiz}>
        Restart Quiz
      </TextButton>
      <TextButton onPress={backToDeck}>
        Back to Deck
      </TextButton>
    </View>
  )
}

const styles = StyleSheet.create({
  correctAnswerScore: {
    fontSize: 32,
    fontWeight: '300',
    color: darkGray,
    marginTop: 32,
    marginBottom: 48,
    textAlign: 'center',
  },
})

export default QuizScore
