[@reacherhq/api](README.md) › [Globals](globals.md)

# @reacherhq/api

<br /><br />

<h1 align="center">@reacherhq/api</h1>
<h4 align="center">Check if an email address exists without sending any email.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@reacherhq/api">
    <img alt="npm" src="https://img.shields.io/npm/v/@reacherhq/api.svg" />
  </a>
  <a href="https://github.com/reacherhq/reacher-js/actions">
    <img alt="Github Actions" src="https://github.com/reacherhq/reacher-js/workflows/pr/badge.svg" />
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img alt="Apache-2.0" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" />
  </a>
  <a href="https://david-dm.org/reacherhq/reacher-js">
    <img alt="david-dm" src="https://img.shields.io/david/reacherhq/reacher-js.svg" />
  </a>
</p>

<br /><br />

## What is it?

This tool allows you to check if an email address exists without sending any email.

It is a TypeScript wrapper around the [Reacher Email Verification API](https://reacher.email). Reacher is free for personal use, and the API token is optional, but in this case the requests will be rate-limited.

## Usage

Install the package:

```bash
yarn add @reacherhq/api # Or npm install @reacherhq/api
```

Then open up a JavaScript file and use:

```typescript
import { checkEmail } from '@reacherhq/api';

checkEmail({ to_email: 'someone@gmail.com' }).then(console.log); // Output will be the JSON described below.
```

## 📚 [See Full Documentation](./docs/modules/_index_.md)

## What Does Reacher Check?

| Included? | Feature                                       | Description                                                                                                                     | JSON field               |
| --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| ✅        | **Email reachability**                        | How confident are we in sending an email to this address? Can be one of `safe`, `risky`, `invalid` or `unknown`.                | `is_reachable`           |
| ✅        | **Syntax validation**                         | Is the address syntactically valid?                                                                                             | `syntax.is_valid_syntax` |
| ✅        | **DNS records validation**                    | Does the domain of the email address have valid MX DNS records?                                                                 | `mx.accepts_mail`        |
| ✅        | **Disposable email address (DEA) validation** | Is the address provided by a known [disposable email address](https://en.wikipedia.org/wiki/Disposable_email_address) provider? | `misc.is_disposable`     |
| ✅        | **SMTP server validation**                    | Can the mail exchanger of the email address domain be contacted successfully?                                                   | `smtp.can_connect_smtp`  |
| ✅        | **Email deliverability**                      | Is an email sent to this address deliverable?                                                                                   | `smtp.is_deliverable`    |
| ✅        | **Mailbox disabled**                          | Has this email address been disabled by the email provider?                                                                     | `smtp.is_disabled`       |
| ✅        | **Full inbox**                                | Is the inbox of this mailbox full?                                                                                              | `smtp.has_full_inbox`    |
| ✅        | **Catch-all address**                         | Is this email address a [catch-all](https://debounce.io/blog/help/what-is-a-catch-all-or-accept-all/) address?                  | `smtp.is_catch_all`      |
| ✅        | **Role account validation**                   | Is the email address a well-known role account?                                                                                 | `misc.is_role_account`   |

## JSON Output

The output will be a JSON with the below format, the fields should be self-explanatory. For `someone@gmail.com` (note that it is disabled by Gmail), here's the exact output:

```json
{
	"input": "someone@gmail.com",
	"is_reachable": "invalid",
	"misc": {
		"is_disposable": false,
		"is_role_account": false
	},
	"mx": {
		"accepts_mail": true,
		"records": [
			"alt3.gmail-smtp-in.l.google.com.",
			"gmail-smtp-in.l.google.com.",
			"alt1.gmail-smtp-in.l.google.com.",
			"alt4.gmail-smtp-in.l.google.com.",
			"alt2.gmail-smtp-in.l.google.com."
		]
	},
	"smtp": {
		"can_connect_smtp": true,
		"has_full_inbox": false,
		"is_catch_all": false,
		"is_deliverable": false,
		"is_disabled": true
	},
	"syntax": {
		"domain": "gmail.com",
		"is_valid_syntax": true,
		"username": "someone"
	}
}
```

You can also take a look at the [OpenAPIv3 specification](https://reacher.email/docs#operation/post-check-email) of this JSON object.

## License

The source code is available under the Apache-2.0 license. See the [LICENSE](./LICENSE) file for more info.

## 🌯 Sponsor me a Falafel Wrap

[![Sponsor](https://img.shields.io/badge/Github%20Sponsors-%E2%9D%A4%EF%B8%8F-white)](https://github.com/sponsors/amaurymartiny/)

I don't drink coffee, but consider sponsoring me with a wrap from my favorite Falafel dealer! 👉 [See which one.](https://github.com/sponsors/amaurymartiny/)
