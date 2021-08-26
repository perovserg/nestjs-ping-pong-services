firstly launch services in different cmd
- "cd ./ping-service && npm run docker:up" => to start dockerized ping-service
- "cd ./pong-service && npm run docker:up" => to start dockerized pong-service
or
- "cd ./ping-service && npm i && nest start" => to start ping-service locally
- "cd ./pong-service && npm i && nest start" => to start pong-service locally

then:
- to start exchange from ping-service => call POST localhost:3007/start with body { repeats: someNumber }
or
- to start exchange from pong-service => call POST localhost:3005/start with body { repeats: someNumber }
