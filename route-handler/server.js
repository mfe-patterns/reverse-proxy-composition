const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.disable("x-powered-by");
server.use(bodyParser.json());

var layoutServer = "http://localhost:8080",
  catalogServer = "http://localhost:8081",
  cartServer = "http://localhost:8082";

function match(domain) {
  return proxy(domain, {
    proxyReqPathResolver(req) {
      console.log(`${domain}${req.url}`);
      return `${domain}${req.url}`;
    }
  });
}

server.use("/layout", match(layoutServer));

server.use("/products", match(catalogServer));

server.use("/cart", match(cartServer));

server.use("/", match(layoutServer));

server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:3000`);
});