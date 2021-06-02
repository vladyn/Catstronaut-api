const axios = require('axios')
const authenticate = require('./authenticate')

class ChannelEntries {

  constructor (options) {
    this._options = options
  }

  async getEntries () {
    const auth = await authenticate.auth()

    const patch = {
      ...options,
      url: `${options.url}/get_channel_entries?channel_id=1&where[status]=open&session_id=${auth.session_id}`
    }

    const response = await axios(patch)

    return response.data
  }

  async postEntry (entry = { url_title: 'Blas', title: 'Dooom' }) {
    const auth = await authenticate.auth()

    const patch = {
      ...this._options,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${this._options.url}/create_channel_entry?channel_id=1&url_title=${entry.url_title}&title=${entry.title}&entry_date=12345678&session_id=${auth.session_id}`
    }

    const response = await axios(patch)

    return response.data
  }
}

const options = {
  method: 'GET',
  url: 'https://technologytalents.io/space-cats/index.php/openapi',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

module.exports = instance = new ChannelEntries(options)
