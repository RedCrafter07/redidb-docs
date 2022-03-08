# .createDatabase()

The ```.createDatabase()``` method allows you to, you guessed it, create a database. A database is like a collection in MongoDB but without schemes and stuff like that. The database is what you can manipulate, but not the server on its own.

## Syntax
```ts
await database.createDatabase('<name>');
```