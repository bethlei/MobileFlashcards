import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform, View } from 'react-native'
import { purple, white } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: Platform.OS === 'ios' ? purple : white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : purple,
    borderColor: purple,
    borderWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'center',
    marginTop: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  }
})
