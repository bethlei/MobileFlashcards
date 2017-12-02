import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import { white, darkGray, lightGray } from './../utils/colors'

const DeckListItem = (props) => {
  onPress = () => {
    const { navigation, title } = props

    navigation.navigate(
      'Deck',
      { title, navigation }
    )
  }

  const { title, questions } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.deckListTitle}>{title}</Text>
        <Text style={styles.deckListCards}>{questions.length} { questions.length > 1 ? `cards` : `card` }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 8,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
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
    color: darkGray,
    marginTop: 8,
    textAlign: 'center',
  },
  deckListCards: {
    fontSize: 16,
    fontWeight: '400',
    color: lightGray,
    marginBottom: 8,
    textAlign: 'center',
  },
})

export default DeckListItem
