import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Button from '../Button'
import { nav as navActions } from '../../actions'

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Button onPress={navActions.login}>Login</Button>
  </View>
)

Main.navigationOptions = {
  title: 'Welcome to 2doos'
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 5,
    backgroundColor: 'brown'
  },
  buttonText: {
    color: 'white'
  }
})
