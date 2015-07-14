var fs = require("fs");
var webInterface = fs.readFileSync("./lib/webInterface.html");

function webInterfaceEndpoint(req, res) {
	res.end(webInterface);
}

module.exports = webInterfaceEndpoint;
