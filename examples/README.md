# Reacher Examples

Here are some examples on how you can use `@reacherhq/api`.

## How to run the example

In this directory, you can use the `ts-node` CLI to run the examples.

```bash
cd examples
../node_modules/.bin/ts-node csv_batch.ts
```

This will read the `input_emails.csv` file, and output the results into an `output.csv` file.

```bash
# On MacOS
open output.csv
```

If you wish to use your own Reacher API token, pass it in via the `REACHER_API_TOKEN` environment variable.

```bash
REACHER_API_TOKEN=<your_token> ../node_modules/.bin/ts-node csv_batch.ts
```
