const GetKitty = require('./services/getaKitty');

module.exports = {
  Query: {
    spaceCats: async () => await GetKitty.getAllCats(),
    getCat: async (_, { name }) => await GetKitty.getCat(name),
    getPhoto: async (_, { cat }) => await GetKitty.getPhoto(cat),
    getCatById: async (_, { id }) => await GetKitty.getCatByID(id)
  }
}
