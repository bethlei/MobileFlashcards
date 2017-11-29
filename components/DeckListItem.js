import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import { purple, white } from './../utils/colors'

class DeckListItem extends Component {
  onPress = () => {
    const { navigation, title } = this.props
    navigation.navigate(
      'Deck',
      {title}
    )
  }

  render() {
    console.log('decklistitemprops', this.props)
    const { title, questions } = this.props
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <Text style={styles.deckListTitle}>{title}</Text>
          <Text style={styles.deckListCards}>{questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  deckListTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  deckListCards: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999',
    marginBottom: 8,
    textAlign: 'center',
  },
})

export default DeckListItem
