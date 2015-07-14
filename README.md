node-gcm-server
===============

**PRE-RELEASE**

This library provides a simple http server that lets you play with node-gcm.
Pull it with git.
Then start it like this:

```sh
node start.js --port <port> --apiKey <apiKey>
```

Then go to:

```
http://localhost:<port>/
```

There will be a web interface.
The rest should be self-explanatory.

current status
--------------

- sender.send never returns. probably because of invalid api key. that should be an error... hummmm...
