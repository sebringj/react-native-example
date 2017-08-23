import React from 'react'
import { Keyboard, StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight } from 'react-native'
import Button from '../Button'
import {
  nav as navActions,
  todos as todosActions
} from '../../actions'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    marginRight: 10
  },
  text: {
    textDecorationLine: 'underline'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10
  },
  topEntry: {
    marginRight: 10
  },
  listContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    flex: 1,
    flexDirection: 'row'
  },
  listText: {
    fontSize: 16,
  }
})

class TodosList extends React.Component {

  static navigationOptions = {
    title: 'Todos List',
    headerRight: (
      <View style={styles.textContainer}>
        <Text onPress={() => { eventEmitter.emit('dispatch', navActions.logt) }} style={styles.text} >Logout</Text>
      </View>
    )
  }

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  newTodosList = () => {
    eventEmitter.emit('dispatch', todosActions.addTodosList(this.state.value))
    this.setState({ value: '' })
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput
            value={this.state.value}
            onChangeText={(value) => { this.setState({ value }) }}
            underlineColorAndroid="transparent" style={styles.topEntry}
            placeholder="Enter Name of Todo List" />
          <Button onPress={this.newTodosList}>Ok</Button>
        </View>
        <ScrollView>
          {this.props.todosList.map(todoList => {
            return (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  eventEmitter.emit('dispatch', navActions.todos(todoList.id))
                }}
                style={styles.listContainer} key={todoList.id}>
                <Text style={styles.listText}>{todoList.name}</Text>
              </TouchableHighlight>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { todosList: (state.todos && state.todos.todosList || []) }
}

export default connect(mapStateToProps)(TodosList)
