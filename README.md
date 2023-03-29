# reverse-proxy-composition
A revers proxy composition method to create run time micro frontends.

## To run proxy server

- `cd route-handler`

- `npm install`

- `npm start`

This will start the proxy server at 3000 port

## To run layout mfe

- `cd cart`

- `npm install`

- `npm start`

This will start the webpack dev server at 8080 port.

## To run catalog mfe

- `cd catalog`

- `npm install`

- `npm start`

This will start the webpack dev server at 8081 port.

make sure layout is started before running catalog

## To run cart mfe

- `cd cart`

- `npm install`

- `npm start`

This will start the webpack dev server at 8082 port.

make sure layout is started before running cart


Each micro frontend is running on their own port and via a reverse proxy composition as well. 
Use 3000 port to route to specific micro frontend via reverse proxy server



