const GetKitty = require('./services/getaKitty');

module.exports = {
  Query: {
    spaceCats: async () => await GetKitty.getAllCats(),
    getCat: async (cat) => await GetKitty.getCat(cat),
    getPhoto: async (cat) => await GetKitty.getPhoto(cat),
    getCatById: async (id) => await GetKitty.getCatByID(id)
  }
}
