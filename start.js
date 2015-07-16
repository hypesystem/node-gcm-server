var http = require("http");
var yargs = require("yargs");

var args = yargs.default("port", 3000).demand("apiKey").argv;

var app = require("./lib/app.js")(args.apiKey, args.senderId);

http.createServer(app).listen(args.port);
