const axios = require("axios").default;

class GetPageService {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.url; // Base Url
  }

  async getPage(page) {
    const patchUrl = `${this._baseUrl}/${page}`
    const response = await axios.request({ ...this._options, url: patchUrl });

    return response.data[0];
  }
}

const options = {
  method: "GET",
  url: "http://technologytalents.io/space-cats/index.php",
  headers: {
    'Content-Type': 'application/json'
  }
}

module.exports = instance = new GetPageService(options);
