**[@reacherhq/api](../README.md)**

> [Globals](../globals.md) / "src/single"

# Module: "src/single"

## Index

### Interfaces

* [CheckEmailInput](../interfaces/_src_single_.checkemailinput.md)
* [CheckEmailOutput](../interfaces/_src_single_.checkemailoutput.md)
* [CheckSingleOptions](../interfaces/_src_single_.checksingleoptions.md)

### Functions

* [checkSingle](_src_single_.md#checksingle)

## Functions

### checkSingle

▸ **checkSingle**(`input`: [CheckEmailInput](../interfaces/_src_single_.checkemailinput.md), `options?`: [CheckSingleOptions](../interfaces/_src_single_.checksingleoptions.md)): Promise\<[CheckEmailOutput](../interfaces/_src_single_.checkemailoutput.md)>

*Defined in [src/single.ts:48](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/single.ts#L48)*

Perform an email verification on the input email address.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`input` | [CheckEmailInput](../interfaces/_src_single_.checkemailinput.md) | - | An object holding the email to be verified, as well as some other configuration parameters to be used during the verification. |
`options` | [CheckSingleOptions](../interfaces/_src_single_.checksingleoptions.md) | {} | Additional options for making the API call.  |

**Returns:** Promise\<[CheckEmailOutput](../interfaces/_src_single_.checkemailoutput.md)>
