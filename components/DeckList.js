import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { fetchDecks } from './../utils/API'
import { getDecks } from './../actions'
import DeckListItem from './DeckListItem'

class DeckList extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { dispatch } = this.props

    fetchDecks().then((decks) => {
      dispatch(getDecks(decks))
    }).then(() => this.setState(() => ({ ready: true })))
  }

  renderItem = ({ item }) => (
    <DeckListItem {...item} navigation={this.props.navigation} />
  )

  render() {
    const { ready } = this.state
    const { decks } = this.props

    const newDecks = Object.values(decks)
    newDecks.map((d) => {
      d.key = d.title
    })

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View>
        <FlatList
          data={newDecks}
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
