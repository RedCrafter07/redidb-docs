# .edit()

Kind of self explanatory, right?

## Syntax
```ts
await database.edit('<name>', {
		//query
	}, 
	{
		//new content goes here
	}
);
```

## Example

```ts
// Editing an entry
await database.edit("data", {
		dataType: "data"
	}, 
	{
		dataType: "user"
	}
);

// Checking if the edit was successful
const res = await database.query("data", {});
console.log(res);
```