const axios = require("axios").default;

class RandomKitty {
  constructor(options) {
    this._options = options;
  }

  async getPhoto() {
    try {
      let response = await axios.request(this._options);
      return response.data[0]['photo'];
    } catch (error) {
      return error;
    }
  }
}

const options = {
  method: 'GET',
  url: 'https://api.thecatapi.com/v1/images/search?size=full',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '8401ee9d-28ec-4ba4-92a8-690b673f375f'
  }
};

module.exports = instance = new RandomKitty(options);
