var fs = require("fs");
var mu = require("mu2");
var webInterface = fs.readFileSync("./lib/webInterface.html");

function webInterfaceEndpoint(req, res) {
    var vars = {
        senderId: req.vars && req.vars.senderId
    };
    var stream = mu.compileAndRender("./lib/webInterface.html", vars);
    stream.pipe(res);
}

module.exports = webInterfaceEndpoint;
