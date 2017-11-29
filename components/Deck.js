import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from './TextButton'

class Deck extends Component {
  state = {
    deck: null,
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params
    this.setState({ deck: this.props.decks[title] })
    console.log('state', this.props.decks[title])
  }

  addQuestion = (deck) => {
    const { title } = this.props.navigation.state.params
    console.log('addQ', title)
    this.props.navigation.navigate(
      'AddQuestion',
      {title}
    )
  }

  startQuiz = (deck) => {
    const { title } = this.props.navigation.state.params
    this.props.navigation.navigate(
      'Quiz',
      {title}
    )
  }

  render() {
    console.log('deck', this.props)
    const { deck } = this.state
    console.log('item', deck)

    if (deck === null) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckCards}>{deck.questions.length} { deck.questions.length > 1 ? `cards` : `card` }</Text>
        <TextButton onPress={this.addQuestion}>
          Add Question
        </TextButton>
        <TextButton onPress={this.startQuiz} disabled={ deck.questions.length <=0 }>
          Start Quiz
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#333',
    marginTop: 32,
    textAlign: 'center',
  },
  deckCards: {
    fontSize: 18,
    fontWeight: '400',
    color: '#999',
    marginBottom: 24,
    textAlign: 'center',
  },
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck)
