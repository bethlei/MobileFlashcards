import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TabNavigator, StackNavigator } from 'react-navigation'
import reducer from './reducers'
import Navigator from './components/Navigator'
import { setLocalNotification } from './utils/notifications'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
// import DeckList from './components/DeckList'
// import AddDeck from './components/AddDeck'
import { CustomStatusBar } from './components/CustomStatusBar'
import { purple, white } from './utils/colors'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
// import { Constants } from 'expo'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
)

// function CustomStatusBar ({backgroundColor, ...props}) {
//   return (
//     <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
//     <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//    </View>
//   )
// }

// const Tabs = TabNavigator({
//   Home: {
//     screen: DeckList,
//     navigationOptions: {
//       tabBarLabel: 'Decks',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     }
//   },
//   AddDeck: {
//     screen: AddDeck,
//     navigationOptions: {
//       tabBarLabel: 'New Deck',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     }
//   },
// }, {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// })
//
// const Navigator = StackNavigator({
//   Home: {
//     screen: Tabs,
//   },
//   // EntryDetail: {
//   //   screen: EntryDetail,
//   //   navigationOptions: {
//   //     headerTintColor: white,
//   //     headerStyle: {
//   //       backgroundColor: purple,
//   //     }
//   //   }
//   // }
// })

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
        <Navigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
