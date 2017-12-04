import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { submitEntry, fetchDecks } from './../utils/API'
import { getDecks } from './../actions'
import { mediumGray } from './../utils/colors'

class AddDeck extends Component {
  state = {
    title: '',
  }

  addDeck = () => {
    if (this.state.title) {
      const { getDecks } = this.props

      const deck = {
        title: this.state.title,
        questions: [],
      }

      submitEntry(deck).then(() => {
        fetchDecks().then((decks) => {
          getDecks(decks)
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
    borderColor: mediumGray,
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  }
})

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, { getDecks })(AddDeck)
