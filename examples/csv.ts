// Reacher - Email Verification
// Copyright (C) 2018-2020 Amaury Martiny

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

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
