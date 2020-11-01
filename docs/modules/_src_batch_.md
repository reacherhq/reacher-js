**[@reacherhq/api](../README.md)**

> [Globals](../globals.md) / "src/batch"

# Module: "src/batch"

## Index

### Interfaces

* [CheckBatchOptions](../interfaces/_src_batch_.checkbatchoptions.md)

### Functions

* [batchQueue](_src_batch_.md#batchqueue)

## Functions

### batchQueue

▸ **batchQueue**(`options?`: [CheckBatchOptions](../interfaces/_src_batch_.checkbatchoptions.md)): AsyncQueue\<[CheckEmailInput](../interfaces/_src_single_.checkemailinput.md)>

*Defined in [src/batch.ts:44](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/batch.ts#L44)*

This function takes an array of emails, and performs batch email
verification on them. Under the hood, it creates a queue, with a adjustable
concurrency defined in the options, and drains the queue.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options` | [CheckBatchOptions](../interfaces/_src_batch_.checkbatchoptions.md) | {} | Options to pass in to make the api call.  |

**Returns:** AsyncQueue\<[CheckEmailInput](../interfaces/_src_single_.checkemailinput.md)>

- Returns an API requests queue, which is an instance of
[QueueObject](https://caolan.github.io/async/v3/docs.html#QueueObject).
