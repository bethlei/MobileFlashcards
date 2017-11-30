import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from './TextButton'

class QuizScore extends Component {

  restartQuiz = (deck) => {
    const { title } = this.props.navigation.state.params
    this.props.navigation.navigate(
      'Quiz',
      {title}
    )
  }

  backToDeck = (deck) => {
    const { title } = this.props.navigation.state.params
    console.log('addQ', title)
    this.props.navigation.navigate(
      'Deck',
      {title}
    )
  }

  render() {
    console.log('QuizScore', this.props)

    const { deck, title, totalCorrectAnswers, totalQuestions } = this.props.navigation.state.params

    return (
      <View>
        <Text style={styles.correctAnswerScore}>You answered {totalCorrectAnswers} out of { totalQuestions } { totalQuestions > 1 ? `questions` : `question` } correctly on the { title } deck</Text>
        <TextButton onPress={this.restartQuiz}>
          Restart Quiz
        </TextButton>
        <TextButton onPress={this.backToDeck}>
          Back to Deck
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  correctAnswerScore: {
    fontSize: 32,
    fontWeight: '300',
    color: '#333',
    marginTop: 32,
    marginBottom: 48,
    textAlign: 'center',
  },
})

export default QuizScore
