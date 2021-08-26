## Running the dockerized app

```bash
# dockerized ping-service => run in cmd from folder 'ping-service'
$ npm run docker:up
# dockerized pong-service => run in other cmd from folder 'pong-service'
$ npm run docker:up
```

## Running the app locally

```bash
# ping-service => run in cmd from folder 'ping-service'
$ npm i && npm run nest:start
# pong-service => run in other cmd from folder 'pong-service'
$ npm i && npm run nest:start
```

## To start exchange

```bash
# from ping-service
$ curl -X POST -d 'repeats=10' http://localhost:3007/start
# from pong-service
$ curl -X POST -d 'repeats=10' http://localhost:3005/start
```
