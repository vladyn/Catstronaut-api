const axios = require('axios')
const authenticate = require('./authenticate')

class ChannelEntries {

  constructor(options) {
    this._options = options
  }

  async getEntries(channel = { id: 3, status: "open" }) {
    const auth = await authenticate.auth()
    const patch = {
      ...options,
      url: `${this._options.url}/get_channel_entries`,
      params: {
        session_id: auth.session_id,
        'where[status]': channel.status,
        channel_id: channel.id
      }
    }

    const response = await axios(patch)

    return response.data
  }

  async getNextEntry() {
    const formEntries = await this.getEntries({ id: 3 });
    const lastElementId = [...await formEntries];

    return Number(lastElementId.shift().entry_id || 1) + 1;
  }

  async postEntry(entry = {
    url_title: 'Application_form_entry-',
    title: 'Application Form Entry #',
    entry_date: Date.now(),
    channel_id: 3
  }) {
    const auth = await authenticate.auth()
    const nextEntry = await this.getNextEntry();

    const patch = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${this._options.url}/create_channel_entry`,
      data: `channel_id=${entry.channel_id}&url_title=${entry.url_title}${nextEntry}&title=${entry.title} ${nextEntry}&name=${entry.name}&motivation=${entry.motivation}&job_position=${entry.job_position}&mail=${entry.mail}&entry_date=${entry.entry_date}&session_id=${auth.session_id}`
    }

    const response = await axios(patch);

    return response.data;
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
