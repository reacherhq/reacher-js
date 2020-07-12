import csvParse from 'csv-parse';
import fs from 'fs';

import { checkEmail } from '../src';

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
	// When we finish processing the whole CSV file, we send all the
	// requests to Reacher.
	.on('end', () => {
		Promise.all(emailsToCheck.map((to_email) => checkEmail({ to_email })))
			// Once we have the results, we just print them.
			.then((results) => console.log(JSON.stringify(results)))
			.catch(console.error);
	});
