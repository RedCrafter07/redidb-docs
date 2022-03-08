# .query()

Do you want to get data from a database? That's where the ```.query()``` method comes in!
You can retrieve items from a database by finding them using a query. Simple, right? 
The query method is returning an array. If no matching items were found, the array is empty.
When leaving the query empty, you will get the whole database.

## Syntax
```ts
await database.query('<name>', {
	//query
});
```

## Example

```ts
const res = await database.query("data", {
	dataType: "user"
});
console.log(res);
```