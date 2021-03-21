const axios = require("axios").default;

class GetAKitty {
  cats = [];
  _baseURL = '';

  constructor(options) {
    this._options = options;
    this._baseURL = options.url;
  }

  async getPhoto(cat) {
    try {
      let response = await axios.request({ ...this._options, url: `${this._baseURL}/entry_photo/${cat}`});
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getCat(cat) {
    try {
      let response = await axios.request({ ...this._options, url: `${this._baseURL}/entry/${cat}`});
      return response.data;
    } catch (error) {
      return error;
    }
  }

  getCatByID(catID) {
    return this._feed({ ...this._options, url: `${this._baseURL}/entries` })
      .then(cats => {
        this.cats = [...cats];
        return this.cats.find(cat => cat.entry_id === catID);
      })
      .catch(error => new Error(`Error~: ${error}`));
  }

  async getAllCats() {
    return await this._feed({ ...this._options, url: `${this._baseURL}/entries` })
  }

  async _feed(options) {
    try {
      let response = await axios.request(options);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

const options = {
  method: 'GET',
  url: 'http://technologytalents.io/space-cats/index.php/api', // baseURL
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '8401ee9d-28ec-4ba4-92a8-690b673f375f'
  }
};

module.exports = instance = new GetAKitty(options);
