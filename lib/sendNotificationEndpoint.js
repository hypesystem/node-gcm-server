var gcm = require("node-gcm");

function sendNotificationEndpoint(req, res) {
    var recipients = req.body.to;

    if(!recipients) {
        res.status(403);
        return res.send({
            success: false,
            message: "Missing argument required `to`."
        });
    }

    var message = new gcm.Message(req.body);

    var apiKey = req.vars.apiKey;
    var sender = new gcm.Sender(apiKey);

    sender.send(message, recipients, function(error, result) {
        if(error) {
            console.error("Failed to send message", error);
            res.status(500);
            return res.send({
                success: false,
                message: "Sending failed",
                error: error
            });
        }
        res.send({
            success: true,
            message: "Message sent.",
            result: result
        });
    });
}

module.exports = sendNotificationEndpoint;
