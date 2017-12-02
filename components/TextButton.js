import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

const TextButton = ({ children, onPress, style = {}, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={[styles.reset, style, disabled ? styles.disabled : null]}>{children}</Text>
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
  },
  disabled : {
    opacity: 0.4,
  }
})

export default TextButton
