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
    const { title, questions } = this.props
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <Text>{title}</Text>
          <Text>{questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
})

export default DeckListItem
