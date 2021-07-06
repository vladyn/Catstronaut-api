# Simple GraphQL server
## GraphQL API consumer provirder

Catstronaut is a playground for a GraphQL API, providing and consuming data.
It:
 - Consumes an REST like API 
 - Provides it to a front-en application

 It's a based on GraphQL tutorial from [Odyssey Lift off course, Part 1](https://odyssey.apollographql.com/lift-off-part1).


## Authenticate
Create a file in the root folder of the middleware project called config.js with your credentials like
```
module.exports = credentials = {
    username: yourData,
    password: yourData
}
```

## Deployment
Deploy is thought sftp on the client host. Ask for permissions the author.

 # Run
To get started run the following command.

```
yarn install && yarn start
```

Once everything is bootstraped navigate to `http://localhost:4000` in your browser.

You should be able to see the test results report as the list in the console.


## Build with
- JavaScript

## Meta
[1.1]: http://i.imgur.com/wWzX9uB.png
[2.1]: http://i.imgur.com/9I6NRUm.png

Vladimir Varbanov
- [vlado1.com](http://vlado1.com)
- [![GitHub][2.1]](https://github.com/vladyn/) [vladyn](https://github.com/vladyn/)
- [![Twitter][1.1]](https://twitter.com/vladyn) [@vladyn](https://twitter.com/vladyn)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/vladyn/Catstronaut-api/blob/master/LICENSE)
