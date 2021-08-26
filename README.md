## Running the dockerized app

```bash
# dockerized ping-service
$ cd ./ping-service && npm run docker:up
# dockerized pong-service
$ cd ./pong-service && npm run docker:up
```

## Running the app locally

```bash
# ping-service
$ cd ./ping-service && npm i && nest start
# pong-service
$ cd ./pong-service && npm i && nest start
```

## To start exchange from ping-service

call POST "localhost:3007/start" with body { repeats: someNumber }

## To start exchange from pong-service

call POST "localhost:3005/start" with body { repeats: someNumber }
