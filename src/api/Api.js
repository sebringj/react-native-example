import { AsyncStorage } from 'react-native'

class Api {
  constructor() {

  }

  async _get(data) {
    try {
      return await AsyncStorage.getItem(data.url)
    } catch (err) {
      return undefined
    }
  }

  async _post() {

  }

  async _put() {

  }

  async _delete() {

  }
}

export default Api
