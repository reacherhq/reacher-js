[@reacherhq/api](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Type aliases

* [CheckEmailOutput](_index_.md#checkemailoutput)

### Functions

* [reacher](_index_.md#reacher)

## Type aliases

###  CheckEmailOutput

Ƭ **CheckEmailOutput**: *components["schemas"]["CheckEmailOutput"]*

Defined in index.ts:6

## Functions

###  reacher

▸ **reacher**(`input`: components["schemas"]["CheckEmailInput"], `apiToken?`: undefined | string, `config`: AxiosRequestConfig): *Promise‹[CheckEmailOutput](_index_.md#checkemailoutput)›*

Defined in index.ts:24

Perform an email verification on the input email address.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | components["schemas"]["CheckEmailInput"] | - | An object holding the email to be verified, as well as some other configuration parameters to be used during the verification. |
`apiToken?` | undefined &#124; string | - | Your Reacher's API token. If not passed, then the API is still usable, but heavy rate-limiting will be applied. |
`config` | AxiosRequestConfig | {} | Additional configuration to be passed to the axios request.  |

**Returns:** *Promise‹[CheckEmailOutput](_index_.md#checkemailoutput)›*
