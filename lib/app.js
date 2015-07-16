var express = require("express");
var bodyParser = require("body-parser");
var variableSaver = require("./variableSaver.js");
var webInterfaceEndpoint = require("./webInterfaceEndpoint.js");
var sendNotificationEndpoint = require("./sendNotificationEndpoint.js");

function buildApp(apiKey, senderId) {
    var app = express();

    app.use(bodyParser.json());
    app.use(variableSaver({ apiKey: apiKey, senderId: senderId }));

    app.get("/", webInterfaceEndpoint);
    app.post("/", sendNotificationEndpoint);

    return app;
}

module.exports = buildApp;
