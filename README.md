node-gcm-server
===============

This library is in a very early stage.
You are very welcome to help bring it to life and make it something useful.

The purpose of this library is to provide a playground for easily sending out notifications, to assist in learning how exactly notifications over GCM work.
It is based pretty much exactly on [node-gcm](https://github.com/ToothlessGear/node-gcm).

This library provides a simple http server that lets you play with node-gcm.
Pull it with git.
Then start it like this:

```sh
node start.js --port <port> --apiKey <apiKey> --senderId <senderId>
```

- `apiKey` is required.
- `port` is optional, defaults to 3000.
- `senderId` is optional.
  When given, it results in a box being shown to visitors with the senderId, so they have all the information they need to create registration ids.

Then go to:

```
http://localhost:<port>/
```

There will be a web interface.
The rest should be self-explanatory.
