[@reacherhq/api](../README.md) › [Globals](../globals.md) › ["src/index"](_src_index_.md)

# Module: "src/index"

## Index

### Type aliases

* [CheckEmailInput](_src_index_.md#checkemailinput)
* [CheckEmailOutput](_src_index_.md#checkemailoutput)

### Functions

* [checkEmail](_src_index_.md#checkemail)

## Type aliases

###  CheckEmailInput

Ƭ **CheckEmailInput**: *components["schemas"]["CheckEmailInput"]*

*Defined in [src/index.ts:22](https://github.com/reacherhq/reacher-js/blob/7900358/src/index.ts#L22)*

___

###  CheckEmailOutput

Ƭ **CheckEmailOutput**: *components["schemas"]["CheckEmailOutput"]*

*Defined in [src/index.ts:23](https://github.com/reacherhq/reacher-js/blob/7900358/src/index.ts#L23)*

## Functions

###  checkEmail

▸ **checkEmail**(`input`: [CheckEmailInput](_src_index_.md#checkemailinput), `apiToken?`: undefined | string, `config`: AxiosRequestConfig): *Promise‹[CheckEmailOutput](_src_index_.md#checkemailoutput)›*

*Defined in [src/index.ts:41](https://github.com/reacherhq/reacher-js/blob/7900358/src/index.ts#L41)*

Perform an email verification on the input email address.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | [CheckEmailInput](_src_index_.md#checkemailinput) | - | An object holding the email to be verified, as well as some other configuration parameters to be used during the verification. |
`apiToken?` | undefined &#124; string | - | Your Reacher's API token. If not passed, then the API is still usable, but heavy rate-limiting will be applied. |
`config` | AxiosRequestConfig | {} | Additional configuration to be passed to the axios request.  |

**Returns:** *Promise‹[CheckEmailOutput](_src_index_.md#checkemailoutput)›*
