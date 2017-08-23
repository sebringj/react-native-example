import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="transparent" style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'brown',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  }
})
