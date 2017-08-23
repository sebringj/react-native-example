import React from 'react'
import { ActivityIndicator, Platform, TextInput, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import Button from '../Button'
import { connect } from 'react-redux'
import { login as loginActions } from '../../actions'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      code: 'C-'
    }
  }

  static navigationOptions = {
    title: 'Login'
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <ActivityIndicator loading={true} />
      </View>
    )
  }

  onSubmitPhone = () => {
    loginActions.sendCode(this.state.phone)
  }

  onSubmitCode = () => {
    loginActions.verifyCode(this.state.code)
  }

  renderPhone() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'android' ? 45 : 65}>
          <Text>Enter your phone number</Text>
          <TextInput underlineColorAndroid="transparent" value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            onSubmitEditing={this.onSubmitPhone} style={styles.textInput} placeholder="123-123-1234" />
          <Button onPress={this.onSubmitPhone}>Go</Button>
        </KeyboardAvoidingView>
      </View>
    )
  }

  renderCode() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'android' ? 45 : 65}>
          <Text>Enter your text code</Text>
          <TextInput underlineColorAndroid="transparent" value={this.state.code}
            onChangeText={code => this.setState({ code })}
            onSubmitEditing={this.onSubmitCode} style={styles.textInput} placeholder="C-123456" />
          <Button onPress={this.onSubmitCode}>Submit</Button>
        </KeyboardAvoidingView>
      </View>
    )
  }

  render() {
    let login = this.props.login || {}
    if (login.loading)
      return this.renderLoading()
    else if (login.showCode)
      return this.renderCode()
    else
      return this.renderPhone()
  }
}

const mapStateToProps = state => ({
  ...state.login
})

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 5,
    padding: 5,
    textAlign: 'center'
  }
})
