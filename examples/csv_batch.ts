/**
 * @ignore
 */ /** */

import csvParse from 'csv-parse';
import fs from 'fs';
import { Parser } from 'json2csv';

import { batchQueue, CheckEmailOutput } from '../src';

// We create an array that will hold all the verifications of our emails.
const emailResults: CheckEmailOutput[] = [];

// We set up our batch verfication queue. Each time we successfully verify an
// email, we push the result of the verification to our `emailResults` array.
const q = batchQueue({
	apiToken: process.env.REACHER_API_TOKEN,
	onSuccessSingle: (output) => {
		console.log(
			`Successfully verified ${output.input}: ${output.is_reachable}.`
		);
		// On each successful email verification, we add it to our
		// `emailResults` array.
		emailResults.push(output);
	},
});

// If, by any chance, the API requests errors (network error, too many
// requests...), then we just log the error.
q.error((err, input) => {
	console.log(`Error with ${input.to_email}: ${err.message}`);
});

// Import our CSV file with the list of emails to check.
fs.createReadStream('./input_emails.csv')
	// Use `csv-parse` to parse the CSV.
	.pipe(csvParse())
	// The `on('data')` handler returns chunks of data at once, so `data`
	// is a `string[]`. Every time we receive some chunks of emails, we convert
	// then into a CheckEmailInput object (with a `to_email` field), and push
	// this object into the queue.
	.on('data', (data: string[]) => {
		q.push(data.map((email) => ({ to_email: email }))); // eslint-disable-line
	})
	// When we finish processing the whole CSV file, we call `.drain` on the
	// queue, and pass a callback function where we output the results as CSV.
	.on('end', () => {
		q.drain(() => {
			// List the column fields of our final CSV.
			const fields = [
				'input',
				'is_reachable',
				'misc.is_disposable',
				'misc.is_role_account',
				'mx.accepts_mail',
				'mx.records',
				'smtp.can_connect_smtp',
				'smtp.has_full_inbox',
				'smtp.is_catch_all',
				'smtp.is_deliverable',
				'smtp.is_disabled',
				'syntax.address',
				'syntax.domain',
				'syntax.is_valid_syntax',
				'syntax.username',
			];

			// We use the `json2csv` library to convert the results to CSV.
			const json2csvParser = new Parser<CheckEmailOutput>({ fields });
			const csv = json2csvParser.parse(emailResults);

			// Create a new CSV file with all the results.
			fs.writeFileSync('./output.csv', csv, 'utf-8');
		});
	});
