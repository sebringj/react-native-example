import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Todos extends React.Component {

  static navigationOptions = {
    title: 'Edit Todos'
  }

  render() {
    return (
      <View>
        <Text>Todos</Text>
      </View>
    )
  }
}

export default Todos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
