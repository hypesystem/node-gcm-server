var fs = require("fs");
var mu = require("mu2");
var webInterface = fs.readFileSync("./lib/webInterface.html");

function webInterfaceEndpoint(req, res) {
    var stream = mu.compileAndRender("./lib/webInterface.html", { senderId: req.vars.senderId });
    stream.pipe(res);
}

module.exports = webInterfaceEndpoint;
