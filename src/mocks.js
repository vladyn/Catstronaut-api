const { MockList } = require('apollo-server');
const RandomKitty = require('./randomKitty');

const mock = {
  Query: () => ({
    spaceCats: () => new MockList([14, 18]),
    missions: () => new MockList(4)
  }),
  SpaceCat: () => ({
    name: () => 'The Lazy Gonzo',
    age: 7,
    photo: async () => {
      return await RandomKitty.getPhoto();
    },
    missions: () => ([{
      id: 12,
      name: 'Mission impossible',
      description: 'A mocked dummy mission'
    }])
  }),
  Mission: () => ({
    id: 42,
    name: 'Mission impossible 2',
    description: 'Another mocked dummy mission'
  })
}

module.exports = mock;
