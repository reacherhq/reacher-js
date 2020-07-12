[![Crate](https://img.shields.io/crates/v/check-if-email-exists.svg)](https://crates.io/crates/check-if-email-exists)
[![Docs](https://docs.rs/check-if-email-exists/badge.svg)](https://docs.rs/check-if-email-exists)
[![Actions Status](https://github.com/amaurymartiny/check-if-email-exists/workflows/CI/badge.svg)](https://github.com/amaurymartiny/check-if-email-exists/actions)
[![Travis](https://img.shields.io/travis/amaurymartiny/check-if-email-exists.svg)](https://travis-ci.org/amaurymartiny/check-if-email-exists)
[![Appveyor](https://ci.appveyor.com/api/projects/status/github/amaurymartiny/check-if-email-exists?branch=master&svg=true)](https://ci.appveyor.com/project/amaurymartiny/check-if-email-exists-a08kp)
![License](https://img.shields.io/github/license/amaurymartiny/check-if-email-exists.svg)

<br /><br /><br />

<h1 align="center">check-if-email-exists</h1>
<h4 align="center">Check if an email address exists before sending the email.</h4>

<br /><br /><br />

## 👉 Live Demo: https://reacher.email

You can also:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/amaurymartiny/check-if-email-exists)

**IMPORTANT:** This software is licensed under the AGPL-3.0 license, which forbids it being integrated and distributed in closed-source commercials projects. [Message me](mailto:amaury.martiny@protonmail.com) if you wish an alternate licensing.

## What Does This Tool Check?

| Included? | Feature                                       | Description                                                                                                                     | JSON field                                                                      |
| --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ✅        | **Email reachability**                        | How confident are we in sending an email to this address? Can be one of `safe`, `risky`, `invalid` or `unknown`.                | `is_reachable`                                                                  |
| ✅        | **Syntax validation**                         | Is the address syntactically valid?                                                                                             | `syntax.is_valid_syntax`                                                        |
| ✅        | **DNS records validation**                    | Does the domain of the email address have valid MX DNS records?                                                                 | `mx.accepts_mail`                                                               |
| ✅        | **Disposable email address (DEA) validation** | Is the address provided by a known [disposable email address](https://en.wikipedia.org/wiki/Disposable_email_address) provider? | `misc.is_disposable`                                                            |
| ✅        | **SMTP server validation**                    | Can the mail exchanger of the email address domain be contacted successfully?                                                   | `smtp.can_connect_smtp`                                                         |
| ✅        | **Email deliverability**                      | Is an email sent to this address deliverable?                                                                                   | `smtp.is_deliverable`                                                           |
| ✅        | **Mailbox disabled**                          | Has this email address been disabled by the email provider?                                                                     | `smtp.is_disabled`                                                              |
| ✅        | **Full inbox**                                | Is the inbox of this mailbox full?                                                                                              | `smtp.has_full_inbox`                                                           |
| ✅        | **Catch-all address**                         | Is this email address a [catch-all](https://debounce.io/blog/help/what-is-a-catch-all-or-accept-all/) address?                  | `smtp.is_catch_all`                                                             |
| ✅        | **Role account validation**                   | Is the email address a well-known role account?                                                                                 | `misc.is_role_account`                                                          |
| 🔜        | **Free email provider check**                 | Is the email address bound to a known free email provider?                                                                      | [Issue #89](https://github.com/amaurymartiny/check-if-email-exists/issues/89)   |
| 🔜        | **Syntax validation, provider-specific**      | According to the syntactic rules of the target mail provider, is the address syntactically valid?                               | [Issue #90](https://github.com/amaurymartiny/check-if-email-exists/issues/90)   |
| 🔜        | **Honeypot detection**                        | Does email address under test hide a [honeypot](https://en.wikipedia.org/wiki/Spamtrap)?                                        | [Issue #91](https://github.com/amaurymartiny/check-if-email-exists/issues/91)   |
| 🔜        | **Gravatar**                                  | Does this email address have a [Gravatar](https://gravatar.com/) profile picture?                                               | [Issue #92](https://github.com/amaurymartiny/check-if-email-exists/issues/92)   |
| 🔜        | **Have I Been Pwned?**                        | Has this email been compromised in a [data breach](https://haveibeenpwned.com/)?                                                | [Issue #289](https://github.com/amaurymartiny/check-if-email-exists/issues/289) |

## 🤔 Why?

Many online services (https://hunter.io, https://verify-email.org, https://email-checker.net) offer this service for a paid fee. Here is an open-source alternative to those tools.

## Try It Yourself

There are 5 ways you can try `check-if-email-exists`.

### 1. Use the Hosted Version: https://reacher.email 🥇

This simple SaaS is also open-source by the way: https://github.com/reacherhq.

If you would like to self-host it yourself and have questions, send me a message.

### 2. Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/amaurymartiny/check-if-email-exists)

Heroku's servers have SMTP port 25 open, and have static IPs able to connect to most email providers (unless of course if you start heavily spamming these providers).

### 3. Use Docker

The [Docker image](./Dockerfile) is hosted on Docker Hub: https://hub.docker.com/r/amaurymartiny/check-if-email-exists.

To run it, run the following command:

```bash
docker run -p 3000:3000 amaurymartiny/check-if-email-exists
```

You can then send a POST request with the following body to `http://localhost:3000` to test multiple emails at once:

```json
{
	"to_emails": ["someone@gmail.com"]
}
```

Here's the equivalent `curl` command:

```bash
curl -X POST -d'{"to_emails":["someone@gmail.com"]}' http://localhost:3000
```

Optionally, you can also pass in `from_email` and `hello_name` fields into the JSON object, see the help message below to understand their meanings.

### 4. Download the Binary

> Note: The binary doesn't connect to any backend, it checks the email directly from your computer.

Head to the [releases page](https://github.com/amaurymartiny/check-if-email-exists/releases) and download the binary for your platform. Make sure you have [`openssl`](https://www.openssl.org/) installed on your local machine.

```
> $ check_if_email_exists --help
check_if_email_exists 0.8.11
Check if an email address exists without sending any email.

USAGE:
    check_if_email_exists [FLAGS] [OPTIONS] [TO_EMAIL]

FLAGS:
        --http       Runs a HTTP server.
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
        --from-email <FROM_EMAIL>          The email to use in the `MAIL FROM:` SMTP command. [default:
                                           user@example.org]
        --hello-name <HELLO_NAME>          The name to use in the `EHLO:` SMTP command. [default: localhost]
        --http-host <HOST>                 Sets the host IP address on which the HTTP server should bind. Only used when
                                           `--http` flag is on. [default: 127.0.0.1]
        --http-port <PORT>                 Sets the port on which the HTTP server should bind. Only used when `--http`
                                           flag is on. If not set, then it will use $PORT, or default to 3000.
        --proxy-host <PROXY_HOST>          Use the specified SOCKS5 proxy host to perform email verification.
        --proxy-port <PROXY_PORT>          Use the specified SOCKS5 proxy port to perform email verification. Only used
                                           when `--proxy-host` flag is set. [default: 1080]
        --yahoo-use-api <YAHOO_USE_API>    For Yahoo email addresses, use Yahoo's API instead of connecting directly to
                                           their SMTP servers. [default: true]

ARGS:
    <TO_EMAIL>    The email to check.
```

If you run with the `--http` flag, `check-if-email-exists` will serve a HTTP server on `http://localhost:3000`. You can then send a POST request with the following body to test multiple emails at once:

```json
{
	"to_emails": ["someone@gmail.com"]
}
```

Here's the equivalent `curl` command:

```bash
curl -X POST -d'{"to_emails":["someone@gmail.com"]}' http://localhost:3000
```

Optionally, you can also pass in `from_email` and `hello_name` fields into the JSON object, see the help message above to understand their meanings.

**💡 PRO TIP:** To show debug logs when running the binary, run:

```bash
RUST_LOG=debug check_if_email_exists [FLAGS] [OPTIONS] [TO_EMAIL]
```

### 5. Usage as a Rust Library

In your own Rust project, you can add `check-if-email-exists` in your `Cargo.toml`:

```toml
[dependencies]
check-if-email-exists = "0.8"
```

And use it in your code as follows:

```rust
use check_if_email_exists::{check_email, CheckEmailInput};

async fn check() {
    // Let's say we want to test the deliverability of someone@gmail.com.
    let mut input = CheckEmailInput::new(vec!["someone@gmail.com".into()]);

    // Optionally, we can also tweak the configuration parameters used in the
    // verification.
    input
        .from_email("me@example.org".into()) // Used in the `MAIL FROM:` command
        .hello_name("example.org".into()); // Used in the `EHLO` command

    // Verify this input, using async/await syntax.
    let result = check_email(&input).await;

    // `result` is a `Vec<CheckEmailOutput>`, where the CheckEmailOutput
    // struct contains all information about our email.
    println!("{:?}", result);
}
```

The reference docs are hosted on [docs.rs](https://docs.rs/check-if-email-exists).

## ✈️ JSON Output

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

## ❓ FAQ

### What does `is_reachable: "unknown"` mean?

This means that the server does not allow real-time verification of an email right now. It may happen for multiple reasons: your IP is blacklisted, the SMTP port 25 is blocked, the email account is momentarily receiving too many emails (spam protection)... or the email provider simply does not allow real-time verification at all. The details of this `"unknown"` case can be found in the `smtp.error` and `mx.error` fields.

### The library hangs/takes a long time/doesn't show anything after 1 minute.

Most ISPs block outgoing SMTP requests through port 25, to prevent spam. `check-if-email-exists` needs to have this port open to make a connection to the email's SMTP server, so won't work behind these ISPs, and will instead hang until it times out. There's unfortunately no easy workaround for this problem, see for example [this StackOverflow thread](https://stackoverflow.com/questions/18139102/how-to-get-around-an-isp-block-on-port-25-for-smtp). One solution is to rent a Linux cloud server with a static IP and no blocked ports, see for example our [Deploy to Heroku](#2-deploy-to-heroku) section.

To see in details what the binary is doing behind the scenes, run it in verbose mode to see the logs.

### The output shows `"connection refused"` in the `smtp.error` field.

This also happens when your ISP block SMTP ports, see the above answer.

## 🔨 Build From Source

First, [install Rust](https://www.rust-lang.org/tools/install); you'll need Rust 1.37.0 or later. Then, run the following commands:

```bash
# Download the code
$ git clone https://github.com/amaurymartiny/check-if-email-exists
$ cd check-if-email-exists

# Build in release mode
$ cargo build --release

# Run the binary
$ ./target/release/check_if_email_exists --help
```

## Legacy Bash Script

The 1st version of this tool was a simple bash script which made a telnet call. If you would like to use that simpler version, have a look at the [`legacy`](https://github.com/amaurymartiny/check-if-email-exists/tree/legacy) branch. The reasons for porting the bash script to the current codebase are explained [in this issue](https://github.com/amaurymartiny/check-if-email-exists/issues/4).

## 📜 License

The source code is available under the license beard dude loves. See the [LICENSE](./LICENSE) file for more info.

## 🌯 Falafel Wrap

[![Sponsor](https://img.shields.io/badge/Github%20Sponsors-%E2%9D%A4%EF%B8%8F-white)](https://github.com/sponsors/amaurymartiny/)

I don't drink coffee, but I'd enjoy a wrap from my favorite Falafel dealer. 👉 [See which one.](https://github.com/sponsors/amaurymartiny/)
