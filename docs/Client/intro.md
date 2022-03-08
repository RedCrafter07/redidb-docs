# Getting started

The RediDB Client is a powerful npm package which allows you to control RediDB with JavaScript (or variations like TypeScript).

## Installing
Install the module from npm in one of your existing projects...
```sh
npm i redidb
```

...and then implement it in your code!

*JavaScript*

```js
const RediDB = require("redidb");
```

*TypeScript*

```ts
import RediDB from "redidb";
```

And that's it!

## Connecting to a database

> ### Side note
> We're using typescript for the remaining part of the documentation. So keep that in mind. If you want to use plain JavaScript watch out for the types :)

To connect to a RediDB, you should provide the address of the datastore. The examples below are for local testing, but you can connect to the Datastore with an IP too.

```ts
const database = new RediDB('http://localhost:12018');
// or IP usage
const database = new RediDB('http://<ip>:<port>');
```

## Authenticating
To get started using RediDB, we have to authenticate first. 
> ### Side note
> In this example, we use the default credentials. Please don't do this when you're in production. 
> 
> **We strongly recommend to change it even if you're testing.**

```ts
database.auth('user', 'password');
```

The request above is a promise. In other words: You can await it. If you're using it in a global scope, you can use an IIFE like this:

```ts
(async () => {
	await database.auth('user', 'password');
})()
```

It's not ideal but you can await stuff :)

## Where to go next
Next, you should look at the package methods. 