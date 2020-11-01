**[@reacherhq/api](README.md)**

> [Globals](globals.md)

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
  <a href="https://github.com/sponsors/amaurymartiny">
  	<img alt="Github Sponsor" src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/amaurymartiny" />
  </a>
</p>

<br /><br />

## What is it?

Check if an email address exists without sending any email.

`@reacher/api` is a thin TypeScript wrapper around the [Reacher Email Verification API](https://reacher.email). Reacher is a 100% open-source SaaS, written in Rust. It's also free for personal use, and the API token in `@reacherhq/api` is optional, but without it the requests will be rate-limited to 50 per month.

## Usage

Install the package:

```bash
yarn add @reacherhq/api # Or npm install @reacherhq/api
```

There are two ways to use the library: by sending single API requests, or by using batch verification.

### 1. Single Email Verification

```typescript
import { checkSingle } from '@reacherhq/api';

checkSingle(
	{ to_email: 'someone@gmail.com' },
	{
		apiToken: '<YOUR_TOKEN>', // Optional, rate-limited if not provided.
	}
).then(console.log); // Output will be the JSON described in the "JSON Output" section below.
```

### 2. Batch Email Verification

```typescript
import { batchQueue } from '@reacherhq/api';

// Create a queue for email verifications.
const q = batchQueue({
	// Optional, rate-limited if not provided.
	apiToken: '<YOUR_TOKEN>',
	// Optional, callback to call on each successful verification.
	onSuccessSingle: (result) => {
		console.log(
			`Verified email ${result.input}: the result is ${result.is_reachable}.`
		);
	},
});

// Push some data into the queue. The email verification will start as soon as
// it's in the queue. The queue has a default concurrency of 100.
q.push({ to_email: 'someone1@gmail.com' });
q.push({ to_email: 'someone2@gmail.com' }, { to_email: 'someone3@gmail.com' });

// Perform some action when the queue is drained.
q.drain(() => {
	console.log('Finished processing all items.');
});
```

## 📚 [See Full Documentation](https://github.com/reacherhq/reacher-js/tree/master/docs/modules)

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

You can also take a look at the [OpenAPI v3 specification](https://reacher.email/docs#operation/post-check-email) of this JSON object.

## License

The source code is available under the Apache-2.0 license. See the [LICENSE](./LICENSE) file for more info.
