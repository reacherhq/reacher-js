**[@reacherhq/api](../README.md)**

> [Globals](../globals.md) / ["src/batch"](../modules/_src_batch_.md) / CheckBatchOptions

# Interface: CheckBatchOptions

Options for making a batch email verification.

## Hierarchy

* [CheckSingleOptions](_src_single_.checksingleoptions.md)

  ↳ **CheckBatchOptions**

## Index

### Properties

* [apiToken](_src_batch_.checkbatchoptions.md#apitoken)
* [apiVersion](_src_batch_.checkbatchoptions.md#apiversion)
* [axios](_src_batch_.checkbatchoptions.md#axios)
* [concurrency](_src_batch_.checkbatchoptions.md#concurrency)
* [onSuccessSingle](_src_batch_.checkbatchoptions.md#onsuccesssingle)

## Properties

### apiToken

• `Optional` **apiToken**: undefined \| string

*Inherited from [CheckSingleOptions](_src_single_.checksingleoptions.md).[apiToken](_src_single_.checksingleoptions.md#apitoken)*

*Defined in [src/single.ts:30](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L30)*

Unique Reacher API token to use. If not passed, then the API is still
usable, but will be heavily rate-limited (50 verifications per month).

___

### apiVersion

• `Optional` **apiVersion**: undefined \| \"0.1.5\"

*Inherited from [CheckSingleOptions](_src_single_.checksingleoptions.md).[apiVersion](_src_single_.checksingleoptions.md#apiversion)*

*Defined in [src/single.ts:34](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L34)*

Backend version of Reacher to use. The latest version is 0.1.5.

___

### axios

• `Optional` **axios**: AxiosRequestConfig

*Inherited from [CheckSingleOptions](_src_single_.checksingleoptions.md).[axios](_src_single_.checksingleoptions.md#axios)*

*Defined in [src/single.ts:38](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L38)*

**`reacherhq/api`** uses axios under the hood, pass axios config here.

___

### concurrency

• `Optional` **concurrency**: undefined \| number

*Defined in [src/batch.ts:20](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/batch.ts#L20)*

Concurrency of the queue.

___

### onSuccessSingle

• `Optional` **onSuccessSingle**: undefined \| (output: [CheckEmailOutput](_src_single_.checkemailoutput.md)) => void

*Defined in [src/batch.ts:24](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/batch.ts#L24)*

Callback to perform on each single email verification success.
