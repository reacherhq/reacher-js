/**
 * @ignore
 */ /** */

import csvParse from 'csv-parse';
import fs from 'fs';

import { checkBatch } from '../src';

const emailsToCheck: string[] = [];

// Import our CSV file with the list of emails to check.
fs.createReadStream('./input_emails.csv')
	// Use `csv-parse` to parse the CSV.
	.pipe(csvParse())
	// The `on('data')` handler returns chunks of data at once, so `data`
	// is a `string[]`. We push the emails to a `emailsToCheck` array.
	.on('data', (data: string[]) => {
		emailsToCheck.push(...data);
	})
	// When we finish processing the whole CSV file, we call the `checkBatch`
	// function.
	.on('end', () => {
		// First, convert emails from `string` to `CheckEmailInput`, which is
		// an object with a `{"to_email": "<email_to_verify>"}` field.
		const emailInputs = emailsToCheck.map((email) => ({ to_email: email }));

		// Then, call the `checkBatch` function.
		checkBatch(emailInputs, {
			onSuccessSingle: (output) =>
				console.log(output.input, output.is_reachable),
		})
			.then(() => console.log('Finished processing all emails.'))
			.catch(console.error);
	});
