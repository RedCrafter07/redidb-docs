# .delete()

Well, I think you guessed that this method allows you to delete items, right?

## Syntax
```ts
await database.delete('<name>', {
	//query
});
```

## Example

```ts
await database.delete("data", {
	type: "old"
});
```