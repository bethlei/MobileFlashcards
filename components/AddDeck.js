import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from './../utils/colors'
import TextButton from './TextButton'
import { submitEntry, fetchDecks } from './../utils/API'
import { getDecks } from './../actions'

class AddDeck extends Component {
  state = {
    title: '',
  }

  addDeck = () => {
    if (this.state.title) {
      const { dispatch } = this.props

      const deck = {
        title: this.state.title,
        questions: [],
      }

      submitEntry(deck).then(() => {
        fetchDecks().then((decks) => {
          dispatch(getDecks(decks))
          this.props.navigation.navigate('Deck', { title: this.state.title })
          this.setState(() => ({ title: '' }))
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder='Enter Deck Title'
          autoFocus={true}
        />
        <TextButton
          onPress={this.addDeck}
        >
          Add Deck
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
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 8,
    paddingRight: 8,
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddDeck)
