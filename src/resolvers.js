const { getAKittyService, getPageService, authenticateService, channelEntriesService } = require('./services')

module.exports = {
  Query: {
    spaceCats: async () => await getAKittyService.getAllCats(),
    getCat: async (_, { name }) => await getAKittyService.getCat(name),
    getPhoto: async (_, { cat }) => await getAKittyService.getPhoto(cat),
    getCatById: async (_, { id }) => await getAKittyService.getCatByID(id),
    getPage: async (_, { page }) => await getPageService.getPage(page),
    authenticate: async () => await authenticateService.auth(),
    getEntries: async (_, { input }) => await channelEntriesService.getEntries(input),
  },
  Mutation: {
    createEntry: async (_, { input }) => await channelEntriesService.postEntry(input)
  }
}
