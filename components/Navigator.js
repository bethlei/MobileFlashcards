import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { StyleSheet, View, Platform } from 'react-native'
import DeckList from './../components/DeckList'
import AddDeck from './../components/AddDeck'
import AddQuestion from './../components/AddQuestion'
import Deck from './../components/Deck'
import Quiz from './../components/Quiz'
import QuizScore from './../components/QuizScore'
import { purple, white } from './../utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: 'Add Question',
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: 'Quiz',
    }
  },
  QuizScore: {
    screen: QuizScore,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: 'Quiz Score',
    }
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


const Navigator = () => {
  return (
    <View style={styles.container}>
      <Stack />
    </View>
  )
}

export default Navigator
