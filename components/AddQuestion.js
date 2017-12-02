import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TextInput } from 'react-native'
import TextButton from './TextButton'
import { submitEntry, fetchDecks } from './../utils/API'
import { getDecks } from './../actions'
import { mediumGray } from './../utils/colors'

class AddQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  addQuestionToDeck = () => {
    const { question, answer } = this.state

    if (question && answer) {
      const { title } = this.props.navigation.state.params
      const { dispatch, decks } = this.props

      const deck = decks[title]
      deck.questions.push({ question, answer })

      submitEntry(deck).then(() => {
        fetchDecks().then((decks) => {
          dispatch(getDecks(decks))
          this.props.navigation.navigate('Deck', { title })
          this.setState(() => ({ question: '', answer: '' }))
        })
      })
    }
  }

  render() {
    const { question, answer } = this.state

    return (
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder='Enter a question'
          autoFocus={true}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          placeholder='Enter an answer'
        />
        <TextButton
          onPress={this.addQuestionToDeck}
        >
          Add Question
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    marginTop: 24,
  },
  textInput: {
    height: 40,
    borderColor: mediumGray,
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddQuestion)
