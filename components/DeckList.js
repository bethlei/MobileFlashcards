import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { fetchDecks } from './../utils/API'
import { getDecks } from './../actions'
import DeckListItem from './DeckListItem'

class DeckList extends Component {
  state = {
    ready: false,
    decksArr : [],
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log('decklistprops', this.props)
    fetchDecks().then((decks) => {
      dispatch(getDecks(decks))
      const decksArr = Object.values(decks)
      console.log('decksArr', decksArr)
      decksArr.map((d) => {
        d.key = d.title
      })
      this.setState(() => ({ decksArr }))
    }).then(() => this.setState(() => ({ ready: true })))
  }

  renderItem = ({item}) => (
    <DeckListItem {...item} navigation={this.props.navigation} />
  )

  render() {
    const { ready, decksArr } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View>
        <FlatList
          data={decksArr}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return ({
    decks
  })
}

export default connect(mapStateToProps)(DeckList)
