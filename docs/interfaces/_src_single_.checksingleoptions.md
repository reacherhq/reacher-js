**[@reacherhq/api](../README.md)**

> [Globals](../globals.md) / ["src/single"](../modules/_src_single_.md) / CheckSingleOptions

# Interface: CheckSingleOptions

Options for checking an email.

## Hierarchy

* **CheckSingleOptions**

  ↳ [CheckBatchOptions](_src_batch_.checkbatchoptions.md)

## Index

### Properties

* [apiToken](_src_single_.checksingleoptions.md#apitoken)
* [apiVersion](_src_single_.checksingleoptions.md#apiversion)
* [axios](_src_single_.checksingleoptions.md#axios)

## Properties

### apiToken

• `Optional` **apiToken**: undefined \| string

*Defined in [src/single.ts:30](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L30)*

Unique Reacher API token to use. If not passed, then the API is still
usable, but will be heavily rate-limited (50 verifications per month).

___

### apiVersion

• `Optional` **apiVersion**: undefined \| \"0.1.5\"

*Defined in [src/single.ts:34](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L34)*

Backend version of Reacher to use. The latest version is 0.1.5.

___

### axios

• `Optional` **axios**: AxiosRequestConfig

*Defined in [src/single.ts:38](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L38)*

**`reacherhq/api`** uses axios under the hood, pass axios config here.
