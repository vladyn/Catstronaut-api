const axios = require('axios').default
const credentials = require('../../config')

class AuthenticateService {
  constructor (options) {
    this._options = options
    this._username = options.username
    this._email = options.email
    this._password = options.password

  }

  async auth () {
    const authResponse = await axios(this._options)

    return authResponse.data
  }
}

const options = {
  method: 'POST',
  url: 'https://technologytalents.io/space-cats/index.php/openapi/authenticate_username',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  data: `username=${credentials.username}&password=${credentials.password}`
}

module.exports = instance = new AuthenticateService(options)
