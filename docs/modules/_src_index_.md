[@reacherhq/api](../README.md) › [Globals](../globals.md) › ["src/index"](_src_index_.md)

# Module: "src/index"

## Index

### Interfaces

* [CheckEmailInput](../interfaces/_src_index_.checkemailinput.md)
* [CheckEmailOutput](../interfaces/_src_index_.checkemailoutput.md)

### Functions

* [checkEmail](_src_index_.md#checkemail)

## Functions

###  checkEmail

▸ **checkEmail**(`input`: [CheckEmailInput](../interfaces/_src_index_.checkemailinput.md), `apiToken?`: undefined | string, `config`: AxiosRequestConfig): *Promise‹[CheckEmailOutput](../interfaces/_src_index_.checkemailoutput.md)›*

*Defined in [src/index.ts:30](https://github.com/reacherhq/reacher-js/blob/527ae93/src/index.ts#L30)*

Perform an email verification on the input email address.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`input` | [CheckEmailInput](../interfaces/_src_index_.checkemailinput.md) | - | An object holding the email to be verified, as well as some other configuration parameters to be used during the verification. |
`apiToken?` | undefined &#124; string | - | Your Reacher's API token. If not passed, then the API is still usable, but heavy rate-limiting will be applied. |
`config` | AxiosRequestConfig | {} | Additional configuration to be passed to the axios request.  |

**Returns:** *Promise‹[CheckEmailOutput](../interfaces/_src_index_.checkemailoutput.md)›*
