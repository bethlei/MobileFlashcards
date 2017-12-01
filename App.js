import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { TabNavigator, StackNavigator } from 'react-navigation'
import reducer from './reducers'
import Navigator from './components/Navigator'
import { setLocalNotification } from './utils/notifications'
import { StyleSheet, View } from 'react-native'
import { CustomStatusBar } from './components/CustomStatusBar'
import { purple, white } from './utils/colors'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
)

export default class App extends Component {
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
  },
})
