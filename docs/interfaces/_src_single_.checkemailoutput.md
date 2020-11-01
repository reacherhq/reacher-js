**[@reacherhq/api](../README.md)**

> [Globals](../globals.md) / ["src/single"](../modules/_src_single_.md) / CheckEmailOutput

# Interface: CheckEmailOutput

## Hierarchy

* { input: string ; is_reachable: components[\"schemas\"][\"Reachable\"] ; misc: components[\"schemas\"][\"MiscDetails\"] \| components[\"schemas\"][\"Error\"] ; mx: components[\"schemas\"][\"MxDetails\"] \| components[\"schemas\"][\"Error\"] ; smtp: components[\"schemas\"][\"SmtpDetails\"] \| components[\"schemas\"][\"Error\"] ; syntax: components[\"schemas\"][\"SyntaxDetails\"]  }

  ↳ **CheckEmailOutput**

## Index

### Properties

* [input](_src_single_.checkemailoutput.md#input)
* [is\_reachable](_src_single_.checkemailoutput.md#is_reachable)
* [misc](_src_single_.checkemailoutput.md#misc)
* [mx](_src_single_.checkemailoutput.md#mx)
* [smtp](_src_single_.checkemailoutput.md#smtp)
* [syntax](_src_single_.checkemailoutput.md#syntax)

## Properties

### input

•  **input**: string

*Inherited from [__type](_src_types_.components.md#__type).[input](_src_types_.components.md#input)*

*Defined in [src/types.ts:15](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/types.ts#L15)*

The input email address.

___

### is\_reachable

•  **is\_reachable**: components[\"schemas\"][\"Reachable\"]

*Inherited from [__type](_src_types_.components.md#__type).[is_reachable](_src_types_.components.md#is_reachable)*

*Defined in [src/types.ts:16](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/types.ts#L16)*

___

### misc

•  **misc**: components[\"schemas\"][\"MiscDetails\"] \| components[\"schemas\"][\"Error\"]

*Inherited from [__type](_src_types_.components.md#__type).[misc](_src_types_.components.md#misc)*

*Defined in [src/types.ts:20](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/types.ts#L20)*

Miscellaneous information about the email account.

___

### mx

•  **mx**: components[\"schemas\"][\"MxDetails\"] \| components[\"schemas\"][\"Error\"]

*Inherited from [__type](_src_types_.components.md#__type).[mx](_src_types_.components.md#mx)*

*Defined in [src/types.ts:26](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/types.ts#L26)*

Information gathered from querying the MX records of the mail server.

___

### smtp

•  **smtp**: components[\"schemas\"][\"SmtpDetails\"] \| components[\"schemas\"][\"Error\"]

*Inherited from [__type](_src_types_.components.md#__type).[smtp](_src_types_.components.md#smtp)*

*Defined in [src/types.ts:32](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/types.ts#L32)*

Verifications performed by connecting to the mail server via SMTP.

___

### syntax

•  **syntax**: components[\"schemas\"][\"SyntaxDetails\"]

*Inherited from [__type](_src_types_.components.md#__type).[syntax](_src_types_.components.md#syntax)*

*Defined in [src/types.ts:35](https://github.com/reacherhq/reacher-js/blob/904b6c9/src/types.ts#L35)*
