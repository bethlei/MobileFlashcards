import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { AppLoading } from 'expo'
import { white, red, green, darkGray, lightGray } from './../utils/colors'
import TextButton from './TextButton'
import { submitEntry, fetchDecks } from './../utils/API'
import { getDecks } from './../actions'
import { clearLocalNotification, setLocalNotification } from './../utils/notifications'

class Quiz extends Component {
  state = {
    deck: null,
    totalQuestions: 0,
    indexQuestion: -1,
    correctAnswers: 0,
    showAnswer: false,
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params
    this.setState({
      deck: this.props.decks[title],
      totalQuestions: this.props.decks[title].questions.length
    })
  }

  toggleQuestionAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  handleCorrectAnswer = () => {
    const { deck, totalQuestions, indexQuestion, correctAnswers, showAnswer } = this.state
    const { title } = this.props.navigation.state.params
    if ((totalQuestions - (indexQuestion + 2)) >= 1) {
      this.setState({
        indexQuestion: indexQuestion + 1,
        correctAnswers: correctAnswers + 1,
        showAnswer: false,
      })
    } else {
      const totalCorrectAnswers = correctAnswers + 1
      this.props.navigation.navigate(
        'QuizScore',
        { deck, title, totalCorrectAnswers, totalQuestions }
      )
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  handleIncorrectAnswer = () => {
    const { deck, totalQuestions, indexQuestion, correctAnswers, showAnswer } = this.state
    const { title } = this.props.navigation.state.params

    if ((totalQuestions - (indexQuestion + 2)) >= 1) {
      this.setState({
        indexQuestion: indexQuestion + 1,
        showAnswer: false,
      })
    } else {
      const totalCorrectAnswers = correctAnswers
      this.props.navigation.navigate(
        'QuizScore',
        { deck, title, totalCorrectAnswers, totalQuestions }
      )
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  render() {
    const { deck, totalQuestions, indexQuestion, correctAnswers, showAnswer } = this.state
    let index = indexQuestion + 1

    if (deck === null) {
      return <AppLoading />
    }

    return (
      <View>
        <Text style={styles.remainingQuestions}>{ totalQuestions - index } of { totalQuestions } { totalQuestions > 1 ? `cards` : `card` } remaining</Text>
        <Text style={styles.questionAnswer}>{ showAnswer? deck.questions[index].answer : deck.questions[index].question }</Text>
        <TextButton onPress={this.toggleQuestionAnswer}>Show { showAnswer? `Question` : `Answer` }</TextButton>
        <TextButton style={styles.correctAnswer} onPress={this.handleCorrectAnswer}>Correct</TextButton>
        <TextButton style={styles.incorrectAnswer} onPress={this.handleIncorrectAnswer}>Incorrect</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questionAnswer: {
    fontSize: 32,
    fontWeight: '300',
    color: darkGray,
    marginTop: 32,
    textAlign: 'center',
  },
  remainingQuestions: {
    fontSize: 18,
    fontWeight: '400',
    color: lightGray,
    marginBottom: 24,
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'center',
  },
  correctAnswer: {
    borderColor: green,
    color: Platform.OS === 'ios' ? green : white,
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : green,
    marginTop: 48,
  },
  incorrectAnswer: {
    borderColor: red,
    color: Platform.OS === 'ios' ? red : white,
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : red,
  },
})

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps)(Quiz)
