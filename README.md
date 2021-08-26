firstly launch services in different cmd
<br>
- "cd ./ping-service && npm run docker:up" => to start dockerized ping-service
- "cd ./pong-service && npm run docker:up" => to start dockerized pong-service
<br>
or
<br>
- "cd ./ping-service && npm i && nest start" => to start ping-service locally
- "cd ./pong-service && npm i && nest start" => to start pong-service locally
<br>
then:
<br>
- to start exchange from ping-service => call POST localhost:3007/start with body { repeats: someNumber }
<br>
or
<br>
- to start exchange from pong-service => call POST localhost:3005/start with body { repeats: someNumber }
